import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

import patientRoutes from './modules/patients/patient.routes';
import visitRoutes from './modules/visits/visit.routes';
import recordingRoutes from './modules/recordings/recording.routes';
import noteRoutes from './modules/notes/note.routes';
import authRoutes from './modules/auth/auth.routes';

app.use('/api/patients', patientRoutes);
app.use('/api/visits', visitRoutes);
app.use('/api/recordings', recordingRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/auth', authRoutes);

export default app;
