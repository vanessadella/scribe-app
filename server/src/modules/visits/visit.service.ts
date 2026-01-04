import { db } from '../../db';
import { visits } from '../../db/schema';
import { eq } from 'drizzle-orm';

export class VisitService {
    async getAllVisits() {
        return await db.select().from(visits);
    }

    async getVisitById(id: string) {
        const result = await db.select().from(visits).where(eq(visits.id, id));
        return result[0];
    }

    async createVisit(data: typeof visits.$inferInsert) {
        const result = await db.insert(visits).values(data).returning();
        return result[0];
    }

    async updateVisit(id: string, data: Partial<typeof visits.$inferInsert>) {
        const result = await db.update(visits).set(data).where(eq(visits.id, id)).returning();
        return result[0];
    }
}
