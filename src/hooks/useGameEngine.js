import { useEffect, useState } from "react";

const useGameEngine = (gameSpeed, gameUpdate) => {
  const [running, setRunning] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const switchPlayStop = () => {
    setRunning(!running)
  }

  useEffect(() => {
    if(running){
      gameUpdate()
      setTimeout(() => {setLoopNum(loopNum + 1)}, gameSpeed)
    }
  },[running, loopNum])

  return {switchPlayStop}
}

export default useGameEngine;