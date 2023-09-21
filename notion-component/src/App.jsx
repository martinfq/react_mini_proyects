import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlockView from './components/blockView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlockView />
    </>
  )
}

export default App
