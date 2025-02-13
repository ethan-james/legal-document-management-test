import { Router, Request, Response } from 'express';

const router = Router();

// Add new endpoint for extractions
router.get('/:documentId', (req: Request, res: Response) => {
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

export default router; 