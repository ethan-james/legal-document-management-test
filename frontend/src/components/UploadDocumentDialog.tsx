import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface UploadDocumentDialogProps {
  id: string;
}

interface FileUploadParams {
  file: File;
  id: string;
}

export function UploadDocumentDialog({ id }: UploadDocumentDialogProps) {
  const [file, setFile] = useState<File | null>(null);
  const queryClient = useQueryClient();
  const uploadFile = async ({ file, id }: FileUploadParams) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/v1/upload/${id}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('File upload failed');
    }

    return response.json();
  };

  const mutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      setFile(null);
      queryClient.invalidateQueries({ queryKey: ['documents'] });
    },
    onError: (error: Error) => {
      // Handle error (e.g., show an error message)
      console.error(error);
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    if (file) {
      mutation.mutate({ file, id });
    }
  };

  return (
    <DialogContent className="fixed top-[50%] left-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg">
      <DialogTitle className="text-lg font-semibold">
        Upload Document (Legal Document {id})
      </DialogTitle>
      <DialogDescription className="mt-2">
        <Label className="block cursor-pointer w-full h-[250px] border border-gray-600 bg-gray-200 flex flex-col gap-1 items-center justify-center rounded-lg">
          <Input
            type="file"
            className="hidden"
            aria-label="File input"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          <FontAwesomeIcon className="mb-6" icon={faFileUpload} size="4x" />
          {file ? (
            <strong className="max-w-1/2 text-center leading-relaxed">
              Click submit to upload {file.name}
            </strong>
          ) : (
            <>
              <strong>Drag files here or click to select files</strong>
              <span>PDF files are allowed</span>
            </>
          )}
        </Label>
      </DialogDescription>
      <div className="mt-4 flex gap-2 justify-end">
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="outline" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogClose>
      </div>
    </DialogContent>
  );
}
