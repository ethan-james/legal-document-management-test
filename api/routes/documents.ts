import { Router, Request, Response } from 'express';
import { state } from '../state';

const router = Router();

// Add new endpoint for documents
router.get('/', (req: Request, res: Response) =>
  res.json(
    Object.values(state).map(({ file, id }) => ({
      id,
      filename: file ? `/v1/documents/${id}` : null,
    }))
  )
);

// New endpoint to get a document by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const document = state[id]

  if (!document || !document.file) {
    return res.status(404).send('Document not found.');
  }

  // Set the appropriate headers for file download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${document.file.originalname}"`);

  res.end(document.file.buffer);
});

export default router;
