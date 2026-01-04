import { db } from '../../db';
import { patients } from '../../db/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

export class PatientService {
    async getAllPatients() {
        return await db.select().from(patients);
    }

    async getPatientById(id: string) {
        const result = await db.select().from(patients).where(eq(patients.id, id));
        return result[0];
    }

    async createPatient(data: typeof patients.$inferInsert) {
        const result = await db.insert(patients).values(data).returning();
        return result[0];
    }
}
