import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const router = express.Router();

// Use CORS middleware
router.use(cors());

// Add new endpoint for extractions
router.get('/extractions/:documentId', (req: Request, res: Response) => {
  const { documentId } = req.params;
  // Mock extraction data
  const mockData = {
    documentId,
    extractions: [
      { id: 1, content: 'Extraction 1' },
      { id: 2, content: 'Extraction 2' },
    ],
  };
  res.json(mockData);
});

// Export the router
export default router; 