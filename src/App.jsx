import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [textareaData, setTextareaData] = useState('')
  const [timer, setTimer] = useState(5)
  const [hasStarted, setHasStarted] = useState(false)

  console.log(timer)
  
  useEffect(()=>{
    if(hasStarted && timer > 0) {
      setTimeout(()=>{
        setTimer(prevState => prevState - 1)
      },1000)
    } 
    else if (timer === 0) {
      setHasStarted(false)
    }
  }, [hasStarted, timer])

  const handleOnChange = event => {
      setTextareaData(event.target.value)
  }

  const calculateWordCount = () => {
    const filteredTextareaData = textareaData.split(' ').filter(item => !!item)
    return filteredTextareaData.length
  }

  const handleStart = () => {
    if(!hasStarted) {
      setTimer(5)
    }
    setHasStarted(true)
    console.log(calculateWordCount())
  } 

  const handleReset = () => {
      setTimer(5)
      setHasStarted(true)
  }

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea value={textareaData} onChange={handleOnChange}/>
      <h4>Time remaining: {timer} </h4>
      { 
        <button onClick={handleStart} disabled={hasStarted}>Start</button> 
      }
      <h1>Word count: ???</h1>
    </div>
  )
}

export default App
