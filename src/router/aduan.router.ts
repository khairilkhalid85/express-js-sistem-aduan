import { Router } from 'express';

const aduanRouter = Router();

// Example route to view aduan
aduanRouter.get('/', (req, res) => {
    // Mock data for demonstration
    const aduanData = [
        { id: 1, title: 'Aduan 1', description: 'Description for Aduan 1' },
        { id: 2, title: 'Aduan 2', description: 'Description for Aduan 2' },
    ];

    res.status(200).json({
        success: true,
        data: aduanData,
    });
});

export default aduanRouter;