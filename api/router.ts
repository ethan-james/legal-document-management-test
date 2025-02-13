import express from 'express';
import cors from 'cors';
import extractionsRouter from './routes/extractions'; // Import extractions routes
import documentsRouter from './routes/documents'; // Import documents routes

const router = express.Router();

// Use CORS middleware
router.use(cors());

// Use the extracted routes
router.use('/extractions', extractionsRouter);
router.use('/documents', documentsRouter);

// Export the router
export default router; 