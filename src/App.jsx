import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainPage from './components/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-red-600 min-h-screen w-full'>
      <Header />
      <MainPage />
    </main>
  )
}

export default App
