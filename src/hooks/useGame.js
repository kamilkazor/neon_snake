import { useState } from "react"

const useGame = () => {
  const [snakeDirection, setSnakeDirection] = useState('RIGHT');
  const [snake, setSnake] = useState([
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ])

  //Checking if new direction is allowed and assigning new value
  const updateSnakeDirection = (newDirection) => {
    if(newDirection === 'RIGHT' && snakeDirection !== 'LEFT') setSnakeDirection(newDirection);
    if(newDirection === 'LEFT' && snakeDirection !== 'RIGHT') setSnakeDirection(newDirection);
    if(newDirection === 'UP' && snakeDirection !== 'DOWN') setSnakeDirection(newDirection);
    if(newDirection === 'DOWN' && snakeDirection !== 'UP') setSnakeDirection(newDirection);
  }

  //Moving snake in current direction
  const moveSnake = () => {
    const head = snake[0]
    let newHead
    const updateSnake = (newHead) => {
      console.log(newHead)
      const updatedSnake = [...snake];
      updatedSnake.unshift(newHead);
      updatedSnake.pop();
      setSnake(updatedSnake)
    }
    console.log(head)
    switch (snakeDirection) {
      case 'RIGHT':
        newHead = {...head}
        newHead.x++
        updateSnake(newHead)
        break;
      case 'LEFT':
        newHead = {...head}
        newHead.x--
        updateSnake(newHead)
        break;
      case 'UP':
        newHead = {...head}
        newHead.y--
        updateSnake(newHead)
        break;
      case 'DOWN':
        newHead = {...head}
        newHead.y++
        updateSnake(newHead)
        break;     
      default:
        break;
    }
  }


  return {updateSnakeDirection, snake, moveSnake}
}

export default useGame;