import { useEffect, useState } from "react";
import Display from "./components/Display";
import useGameEngine from "./hooks/useGameEngine";
import useKeyPress from "./hooks/useKeyPress";

const App = () => {

  const {pressedKey, pressEvent} = useKeyPress()
  
  const [snake, setSnake] = useState([
    {x: 3, y: 4},
  ])
  
  
  const moveSnake = () => {
    const newSnake = [...snake];
    newSnake[0]['x']++
    setSnake(newSnake)
  }
  const {setRunning} = useGameEngine(500, moveSnake)

  useEffect(() => {
    console.log(pressedKey)
  },[pressEvent])

  return (
    <div>
      <Display gameSize={25} entities={snake} />
      <button onClick={() => {setRunning(false)}}>pause</button>
      <button onClick={() => {setRunning(true)}}>play</button>
    </div>
  )
}

export default App;
