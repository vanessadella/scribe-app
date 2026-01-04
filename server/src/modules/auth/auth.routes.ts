import { Router } from 'express';

const router = Router();

// Mock Auth for V1 - In production use Better Auth
router.post('/sign-in', (req, res) => {
    // Mock response
    res.json({
        token: 'mock-jwt-token',
        user: {
            id: 'mock-user-id',
            email: 'doctor@scribe.com',
            name: 'Dr. Smith'
        }
    });
});

router.post('/sign-up', (req, res) => {
    res.status(501).json({ error: 'Not implemented' });
});

router.get('/session', (req, res) => {
    res.json({
        user: {
            id: 'mock-user-id',
            email: 'doctor@scribe.com',
            name: 'Dr. Smith'
        }
    });
});

export default router;
