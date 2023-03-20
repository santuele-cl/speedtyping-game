import { useState } from 'react'
import './App.css'

function App() {
  const [ textareaData, setTextareaData ] = useState('')
    
  const handleOnChange = event => {
      setTextareaData(event.target.value)
  }

  const calculateWordCount = () => {
    const filteredTextareaData = textareaData.split(' ').filter(item => item !== '')
    return filteredTextareaData.length
  }

  const handleStart = () => {
    console.log(calculateWordCount())
  } 

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea value={textareaData} onChange={handleOnChange}/>
      <h4>Time remaining: ???</h4>
      <button onClick={handleStart}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  )
}

export default App
