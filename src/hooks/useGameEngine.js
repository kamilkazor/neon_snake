import { useEffect, useState } from "react";

const useGameEngine = (gameSpeed, gameUpdate) => {
  const [running, setRunning] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const update = () => {
    gameUpdate()
    setLoopNum(loopNum + 1)
  }

  useEffect(() => {
    if(running){
      setTimeout(update, gameSpeed)
    }
  },[running, loopNum])

  return {setRunning}
}

export default useGameEngine;