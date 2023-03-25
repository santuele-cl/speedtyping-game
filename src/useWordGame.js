import { useState, useEffect, useRef } from 'react'

export default function useWordGame(startingTime = 10) {
    const [textareaData, setTextareaData] = useState('')
    const [timer, setTimer] = useState(startingTime)
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
  
    const calculateWordCount = (text) => {
      const filteredTextareaData = text.split(' ').filter(item => !!item)
      return filteredTextareaData.length
    }
  
    const handleStart = () => {
      if(!hasStarted) {
        setTextareaData('')
        setWordCount(0)
        setTimer(startingTime)
      }
      setHasStarted(true)
      textareaRef.current.disabled = false
      textareaRef.current.focus()
    } 
    
    return {textareaRef, textareaData, handleOnChange, hasStarted, timer, handleStart, wordCount}
}