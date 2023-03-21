import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [textareaData, setTextareaData] = useState('')
  const [timer, setTimer] = useState(5)
  const [hasStarted, setHasStarted] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textareaRef = useRef(null)

  useEffect(()=>{
    if(hasStarted && timer > 0) {
      setTimeout(()=>{
        setTimer(prevState => prevState - 1)
      },1000)
    } 
    else if (timer === 0) {
      setWordCount(calculateWordCount(textareaData))
      setHasStarted(false)
    }
  }, [hasStarted, timer])

  const handleOnChange = event => {
      setTextareaData(event.target.value)
  }

  const calculateWordCount = (tex) => {
    const filteredTextareaData = tex.split(' ').filter(item => !!item)
    return filteredTextareaData.length
  }

  const handleStart = () => {
    if(!hasStarted) {
      setTextareaData('')
      setWordCount(0)
      setTimer(5)
    }
    setHasStarted(true)
    textareaRef.current.disabled = false
    textareaRef.current.focus()
  } 

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea 
        ref={textareaRef}
        value={textareaData} 
        onChange={handleOnChange}
        disabled={!hasStarted}
      />
      <h4>Time remaining: {timer} </h4>
      { 
        <button 
          onClick={handleStart} 
          disabled={hasStarted}
        >
          Start
        </button> 
      }
      <h1>Word count: {wordCount ? wordCount : '???'}</h1>
    </div>
  )
}

export default App
