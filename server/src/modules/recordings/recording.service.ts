import { db } from '../../db';
import { recordings } from '../../db/schema';
import { eq } from 'drizzle-orm';

export class RecordingService {
    async getRecordingsByVisitId(visitId: string) {
        return await db.select().from(recordings).where(eq(recordings.visitId, visitId));
    }

    async createRecording(data: typeof recordings.$inferInsert) {
        const result = await db.insert(recordings).values(data).returning();
        return result[0];
    }

    async updateRecordingStatus(id: string, status: string, duration?: number) {
        const updateData: any = { status };
        if (duration) updateData.durationSeconds = duration;

        const result = await db.update(recordings)
            .set(updateData)
            .where(eq(recordings.id, id))
            .returning();
        return result[0];
    }
}
