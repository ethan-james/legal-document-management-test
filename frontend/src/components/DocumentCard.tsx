import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface DocumentCardProps {
  id: string;
  filename: string | null;
}

export function DocumentCard({ id, filename }: DocumentCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Legal Document {id}</CardTitle>
        <CardDescription>File Name: {filename || 'No filename provided'}</CardDescription>
      </CardHeader>
    </Card>
  );
} 