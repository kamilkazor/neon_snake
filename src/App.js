import { useEffect } from "react";
import Display from "./components/Display";
import StatusBar from "./components/StatusBar";
import useGameEngine from "./hooks/useGameEngine";
import useKeyPress from "./hooks/useKeyPress";
import useGame from "./hooks/useGame";

const App = () => {
  const gameSize = 25;
  const gameSpeed = 125;

  const {pressedKey, pressEvent} = useKeyPress()

  const {updateSnakeDirection, entities, updateGame, gameRestart, gameStatus} = useGame(gameSize)

  const {switchPlayStop} = useGameEngine(gameSpeed, updateGame)

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
    <div className="app">
      <StatusBar message={gameStatus.status} snakeLength={gameStatus.snakeLength} />
      <Display gameSize={gameSize} entities={entities} />
      <button onClick={gameRestart} >restart</button>
    </div>
  )
}

export default App;
