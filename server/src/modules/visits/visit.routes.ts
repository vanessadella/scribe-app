import { Router } from 'express';
import { VisitService } from './visit.service';

const router = Router();
const visitService = new VisitService();

router.get('/', async (req, res) => {
    try {
        const visits = await visitService.getAllVisits();
        res.json(visits);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch visits' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const visit = await visitService.getVisitById(req.params.id);
        if (!visit) return res.status(404).json({ error: 'Visit not found' });
        res.json(visit);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch visit' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newVisit = await visitService.createVisit(req.body);
        res.status(201).json(newVisit);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create visit' });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedVisit = await visitService.updateVisit(req.params.id, req.body);
        res.json(updatedVisit);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update visit' });
    }
});

export default router;
