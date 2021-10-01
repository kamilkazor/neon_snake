import { useEffect } from "react";
import Display from "./components/Display";
import useGameEngine from "./hooks/useGameEngine";
import useKeyPress from "./hooks/useKeyPress";

const App = () => {

  const {setRunning, snake} = useGameEngine(1000)
  const {pressedKey, pressEvent} = useKeyPress()

  useEffect(() => {
    console.log(pressedKey)
  },[pressEvent])

  return (
    <div>
      <Display gameSize={25} entities={snake} />
      <button onClick={() => {setRunning(false)}}>pause</button>
      <button onClick={() => {setRunning(true)}}>play</button>
      <input type="text" onKeyPress={(e) => {console.log(e)}} ></input>
    </div>
  )
}

export default App;
