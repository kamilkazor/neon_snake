import { useEffect, useState } from "react";

const useGameEngine = (gameSpeed) => {
  const [running, setRunning] = useState(false);
  const [snake, setSnake] = useState([
    {x: 3, y: 4},
  ])

  const moveSnake = () => {
    const newSnake = [...snake];
    newSnake[0]['x']++
    setSnake(newSnake)
  }

  useEffect(() => {
    if(running){
      setTimeout(moveSnake, gameSpeed)
    }
  },[running, snake])

  return {setRunning, snake}
}

export default useGameEngine;