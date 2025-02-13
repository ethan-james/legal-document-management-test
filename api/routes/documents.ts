import { Router, Request, Response } from 'express';
import type { Document } from '../../types/document';

const router = Router();

// Add new endpoint for documents
router.get('/', (req: Request, res: Response) => {
  const mockDocuments = Array.from({ length: 9 }, (_, index) => ({
    id: `${index + 1}`,
    filename: null,
  }));
  res.json<Document[]>(mockDocuments);
});

export default router; 