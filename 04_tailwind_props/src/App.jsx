import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './componants/Card'

function App() {
  return (
    <>  
    <h1 className="text-3xl font-bold underline bg-green-300 p-6 rounded-lg">Tailwind test</h1>

    <Card username="Kapoor" btnText="hello"/>
    <Card username="attri" btnText="hello"/>
    <Card username="dhawan" />

    



    </>
  )
}

export default App