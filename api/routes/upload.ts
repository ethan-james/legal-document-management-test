import { Router, Request, Response } from 'express';
import multer from 'multer';
import { state } from '../state';
const router = Router();
const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(new Error('Only PDF files are allowed!'), false);
    }
    cb(null, true);
  },
});

// Add new endpoint for uploading documents
router.post('/:id', upload.single('file'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  state[req.params.id] = { id: req.params.id, file: req.file, timestamp: new Date() }; // Store file in memory
  res.status(200).send(`File ${req.params.id} uploaded successfully.`);
});

export default router; 