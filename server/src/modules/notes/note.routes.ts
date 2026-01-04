import { Router } from 'express';
import { NoteService } from './note.service';

const router = Router();
const noteService = new NoteService();

router.get('/visit/:visitId', async (req, res) => {
    try {
        const note = await noteService.getNoteByVisitId(req.params.visitId);
        if (!note) return res.status(404).json({ error: 'Note not found' });
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch note' });
    }
});

router.put('/visit/:visitId', async (req, res) => {
    try {
        const { content, status } = req.body;
        const note = await noteService.createOrUpdateNote(req.params.visitId, content, status);
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update note' });
    }
});

router.post('/visit/:visitId/generate', async (req, res) => {
    try {
        const { transcript, language } = req.body;
        if (!transcript) return res.status(400).json({ error: 'Transcript is required' });

        const note = await noteService.generateNoteForVisit(req.params.visitId, transcript, language || 'en-US');
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate note' });
    }
});

export default router;
