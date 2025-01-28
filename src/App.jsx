import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

export default App
