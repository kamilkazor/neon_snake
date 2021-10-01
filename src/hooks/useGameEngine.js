import { useEffect, useState, useRef } from "react";

const useGameEngine = (gameSpeed, gameUpdate) => {
  const [running, setRunning] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    if(running){
      gameUpdate()
      setTimeout(() => {setLoopNum(loopNum + 1)}, gameSpeed)
    }
  },[running, loopNum])

  return {setRunning}
}

export default useGameEngine;