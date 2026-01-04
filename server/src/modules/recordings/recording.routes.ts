import { Router } from 'express';
import { RecordingService } from './recording.service';

const router = Router();
const recordingService = new RecordingService();

router.get('/visit/:visitId', async (req, res) => {
    try {
        const recordings = await recordingService.getRecordingsByVisitId(req.params.visitId);
        res.json(recordings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recordings' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newRecording = await recordingService.createRecording(req.body);
        res.status(201).json(newRecording);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create recording' });
    }
});

router.patch('/:id/status', async (req, res) => {
    try {
        const { status, duration } = req.body;
        const updated = await recordingService.updateRecordingStatus(req.params.id, status, duration);
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update recording status' });
    }
});

export default router;
