import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { useQuery } from '@tanstack/react-query'

export function Home() {
  // const query = useQuery({ queryKey: ['extractions', '123'], queryFn: () => fetch('http://localhost:3000/extractions/123').then(res => res.json()) })

  return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Legal Document 1</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
        </Card>
      </div>
  )
}
