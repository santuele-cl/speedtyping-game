import useWordGame from './useWordGame'
import './App.css'

function App() {
  const {
    textareaRef,
    textareaData, 
    hasStarted, 
    timer, 
    wordCount,
    handleStart, 
    handleOnChange
  } = useWordGame(3)

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
