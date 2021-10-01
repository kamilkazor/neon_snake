import { useEffect, useState } from "react";
import Display from "./components/Display";
import useGameEngine from "./hooks/useGameEngine";
import useKeyPress from "./hooks/useKeyPress";
import useGame from "./hooks/useGame";

const App = () => {

  const {pressedKey, pressEvent} = useKeyPress()

  const {updateSnakeDirection, snake, moveSnake} = useGame()

  const {switchPlayStop} = useGameEngine(500, moveSnake)

  useEffect(() => {
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
      case 'Space':
        switchPlayStop()
      default:
        break;
    }
  },[pressEvent])

  return (
    <div>
      <Display gameSize={25} entities={snake} />
    </div>
  )
}

export default App;
