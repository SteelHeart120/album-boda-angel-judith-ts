import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="h-16 w-16 hover:opacity-80 transition-opacity" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="h-16 w-16 hover:opacity-80 transition-opacity animate-spin" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Vite + React + TailwindCSS + shadcn/ui
        </h1>
        
        <div className="flex flex-col items-center gap-6">
          <div className="bg-card border rounded-lg p-6 shadow-lg">
            <Button 
              onClick={() => setCount((count) => count + 1)}
              className="mb-4"
            >
              Count is {count}
            </Button>
            <p className="text-muted-foreground">
              Edit <code className="bg-muted px-2 py-1 rounded font-mono text-sm">src/App.tsx</code> and save to test HMR
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
          </div>
          
          <p className="text-muted-foreground text-center max-w-md">
            This is a Vite React project with TailwindCSS for styling and shadcn/ui for beautiful, accessible components.
            Click on the Vite and React logos to learn more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
