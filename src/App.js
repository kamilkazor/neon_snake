import Display from "./components/Display";
import useGameEngine from "./hooks/useGameEngine";

const App = () => {

  const {setRunning, snake} = useGameEngine(1000)

  return (
    <div>
      <Display gameSize={25} entities={snake} />
      <button onClick={() => {setRunning(false)}}>pause</button>
      <button onClick={() => {setRunning(true)}}>play</button>
    </div>
  )
}

export default App;
