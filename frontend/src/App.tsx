import { useState } from 'react'
import './App.css'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

function App() {
  const [count, setCount] = useState(0)

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

export default App
