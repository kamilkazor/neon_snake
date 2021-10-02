import { useEffect, useState } from "react";
import Display from "./components/Display";
import StatusBar from "./components/StatusBar";
import Header from "./components/Header";
import useGameEngine from "./hooks/useGameEngine";
import useKeyPress from "./hooks/useKeyPress";
import useGame from "./hooks/useGame";

const App = () => {
  const gameSize = 25;
  const gameSpeed = 125;

  const {pressedKey, pressEvent} = useKeyPress()
  const {updateSnakeDirection, entities, updateGame, gameRestart, gameStatus} = useGame(gameSize)
  const {switchPlayStop, running} = useGameEngine(gameSpeed, updateGame)

  const [message, setMessage] = useState({top: '', bottom: ''})
  useEffect(() => {
    if(gameStatus.gameOver){
      setMessage({top: 'GAME-OVER', bottom: 'press enter to restart' })
    }
    else if(!running){
      setMessage({top: 'PAUSED', bottom: 'press space to play' })
    }
    else{
      setMessage({top: '', bottom: ''})
    }
  },[running, gameStatus])

  
  const enterPressHandler = () => {
    if(gameStatus.gameOver){
      gameRestart();
    }
  }

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
      case 'Enter':
        enterPressHandler()
        break;
      default:
        break;
    }
  },[pressEvent])

  return (
    <div className="app">
      <Header/>
      <StatusBar message={message} snakeLength={gameStatus.snakeLength} />
      <Display gameSize={gameSize} entities={entities} />
    </div>
  )
}

export default App;
