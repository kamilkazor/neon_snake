import { useEffect, useState } from "react";
import Display from "./components/Display";
import useGameEngine from "./hooks/useGameEngine";
import useKeyPress from "./hooks/useKeyPress";
import useGame from "./hooks/useGame";

const App = () => {

  const {pressedKey, pressEvent} = useKeyPress()

  const {updateSnakeDirection, snake, moveSnake} = useGame()

  const {setRunning} = useGameEngine(500, moveSnake)

  useEffect(() => {
    console.log(pressedKey)
    switch (pressedKey) {
      case 'ArrowRight':
        updateSnakeDirection('RIGHT')
        break;
      case 'ArrowLeft':
        updateSnakeDirection('LEFT')
        break;
      case 'ArrowUp':
        updateSnakeDirection('UP')
        break;
      case 'ArrowDown':
        updateSnakeDirection('DOWN')
        break;
      default:
        break;
    }
  },[pressEvent])

  return (
    <div>
      <Display gameSize={25} entities={snake} />
      <button onClick={() => {setRunning(false)}}>pause</button>
      <button onClick={() => {setRunning(true)}}>play</button>
      <button onClick={() => {updateSnakeDirection('LEFT')}}>LEFT</button>
      <button onClick={() => {updateSnakeDirection('RIGHT')}}>RIGHT</button>
      <button onClick={() => {updateSnakeDirection('TOP')}}>TOP</button>
      <button onClick={() => {updateSnakeDirection('BOTTOM')}}>BOTTOM</button>
    </div>
  )
}

export default App;
