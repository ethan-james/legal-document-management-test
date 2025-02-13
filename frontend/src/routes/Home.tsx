import logo from '@/assets/logo.jpg'
import { useSuspenseQuery } from '@tanstack/react-query'
import { DocumentCard } from '@/components/DocumentCard'
import type { Document } from '../../../types/document'

export function Home() {
  const query = useSuspenseQuery<Document[]>({ queryKey: ['documents'], queryFn: () => fetch(`${import.meta.env.VITE_API_URL}/v1/documents`).then(res => res.json()) })

  return (
    <div className='flex flex-col gap-8'>
      <header><img src={logo} alt="logo" className="w-20" /></header>
      <div className="border-1 border-gray-200 rounded-lg p-4 flex flex-wrap justify-center gap-4">
        {query.data.map(({ id, filename }) => (
          <DocumentCard key={id} id={id} filename={filename} />
        ))}
      </div>
    </div>
  )
}
