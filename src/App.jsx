import React from 'react'
import Counter from './components/Counter'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Counter />
        <Toaster />
      </div>
    </>
  )
}

export default App
