import { Router } from 'express';
import { PatientService } from './patient.service';

const router = Router();
const patientService = new PatientService();

router.get('/', async (req, res) => {
    try {
        const patients = await patientService.getAllPatients();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch patients' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const patient = await patientService.getPatientById(req.params.id);
        if (!patient) return res.status(404).json({ error: 'Patient not found' });
        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch patient' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newPatient = await patientService.createPatient(req.body);
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create patient' });
    }
});

export default router;
