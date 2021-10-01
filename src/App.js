import { useEffect } from "react";
import Display from "./components/Display";
import useGameEngine from "./hooks/useGameEngine";
import useKeyPress from "./hooks/useKeyPress";
import useGame from "./hooks/useGame";

const App = () => {

  const {pressedKey, pressEvent} = useKeyPress()

  const {updateSnakeDirection, snake, updateGame} = useGame(25)

  const {switchPlayStop} = useGameEngine(250, updateGame)

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
        break;
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
