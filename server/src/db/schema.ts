import { pgTable, uuid, text, timestamp, jsonb, integer, serial, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    emailVerified: boolean('email_verified'),
    image: text('image'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const patients = pgTable('patients', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    dateOfBirth: timestamp('date_of_birth'),
    gender: text('gender'),
    mrn: text('mrn').unique().notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const visits = pgTable('visits', {
    id: uuid('id').defaultRandom().primaryKey(),
    patientId: uuid('patient_id').references(() => patients.id).notNull(),
    providerId: uuid('provider_id').references(() => users.id).notNull(),
    date: timestamp('date').defaultNow().notNull(),
    reason: text('reason'),
    status: text('status').default('scheduled').notNull(), // scheduled, in_progress, processing, review, completed
    vitals: jsonb('vitals'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const recordings = pgTable('recordings', {
    id: uuid('id').defaultRandom().primaryKey(),
    visitId: uuid('visit_id').references(() => visits.id).notNull(),
    fileUrl: text('file_url'),
    durationSeconds: integer('duration_seconds'),
    status: text('status').default('recording').notNull(), // recording, paused, completed, uploaded
    transcript: jsonb('transcript'),
    createdAt: timestamp('created_at').defaultNow().notNull()
});

export const notes = pgTable('notes', {
    id: uuid('id').defaultRandom().primaryKey(),
    visitId: text('visit_id').notNull(),
    content: jsonb('content'), // SOAP structure
    status: text('status').default('draft').notNull(), // draft, final
    version: integer('version').default(1).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});
