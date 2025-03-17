import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router'
import About from './components/About'
import Background from './components/Background'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Background />
      <Header />
      <Services />
      <About />
    </BrowserRouter>
  )
}

export default App
