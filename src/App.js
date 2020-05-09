import React from 'react'
import './App.scss'
import Worksheet from './Worksheet'

function App() {
  return (
    <div className="App">
      <Worksheet
        max = {20}
        ops = {['+', '-']}
        problems = {60}
        colLen = {20}
      />
    </div>
  )
}

export default App
