import { db } from '../../db';
import { notes } from '../../db/schema';
import { eq } from 'drizzle-orm';
import { GeminiService } from '../../services/gemini.service';

const geminiService = new GeminiService();

export class NoteService {
    async getNoteByVisitId(visitId: string) {
        const result = await db.select().from(notes).where(eq(notes.visitId, visitId));
        return result[0];
    }

    async createOrUpdateNote(visitId: string, content: any, status: string = 'draft') {
        // Check if note exists
        const existing = await this.getNoteByVisitId(visitId);

        if (existing) {
            const result = await db.update(notes)
                .set({ content, status, updatedAt: new Date() })
                .where(eq(notes.id, existing.id))
                .returning();
            return result[0];
        } else {
            const result = await db.insert(notes).values({
                visitId,
                content,
                status,
                version: 1
            }).returning();
            return result[0];
        }
    }

    async generateNoteForVisit(visitId: string, transcript: string, language: string) {
        const generatedContent = await geminiService.generateSOAPNote(transcript, language);
        return await this.createOrUpdateNote(visitId, generatedContent, 'draft');
    }
}
