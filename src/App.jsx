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
      <div className="px-5 sm:px-10 lg:px-20 bg-black/70">
        <Header />
        <About />
        <Services />
      </div>
    </BrowserRouter>
  );
}

export default App
