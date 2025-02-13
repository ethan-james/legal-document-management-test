import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from '@/components/ui/dialog';
import { UploadDocumentDialog } from '@/components/UploadDocumentDialog';

interface DocumentCardProps {
  id: string;
  filename: string | null;
}

export function DocumentCard({ id, filename }: DocumentCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer">
          <CardHeader>
            <CardTitle>Legal Document {id}</CardTitle>
            <CardDescription>
              File Name: {filename || 'No filename provided'}
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <UploadDocumentDialog id={id} />
      </DialogPortal>
    </Dialog>
  );
}
