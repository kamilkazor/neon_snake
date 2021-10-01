import { useEffect, useState } from "react"

const useGame = (gameSize) => {
  const [pending, setPending] = useState(true);
  const [snake, setSnake] = useState([
    {x: 10, y: 0},
    {x: 9, y: 0},
    {x: 8, y: 0},
    {x: 7, y: 0},
    {x: 6, y: 0},
    {x: 5, y: 0},
    {x: 4, y: 0},
    {x: 3, y: 0},
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ])
  const [entities, setEntities] = useState([...snake])
  

  const [snakeDirection, setSnakeDirection] = useState('RIGHT');

  //Checking if new direction is allowed and assigning new value
  const updateSnakeDirection = (newDirection) => {
    if(newDirection === 'RIGHT' && snake[0]['x'] >= snake[1]['x']) setSnakeDirection(newDirection);
    if(newDirection === 'LEFT' && snake[0]['x'] <= snake[1]['x']) setSnakeDirection(newDirection);
    if(newDirection === 'DOWN' && snake[0]['y'] >= snake[1]['y']) setSnakeDirection(newDirection);
    if(newDirection === 'UP' && snake[0]['y'] <= snake[1]['y']) setSnakeDirection(newDirection);
  }

  //Moving snake in current direction
  const moveSnake = () => {
    const head = snake[0]
    let newHead
    const updateSnake = (newHead) => {
      const updatedSnake = [...snake];
      updatedSnake.unshift(newHead);
      updatedSnake.pop();
      setSnake(updatedSnake)
    }
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


  //Stops the game
  const gameOver = () => {
    setPending(false)
  }

  //Returns true if border was crossed
  const checkBorders = () => {
    let borderCrossed = false;
    if(
      snake[0]['x'] < 0 
      || snake[0]['x'] > gameSize - 1
      || snake[0]['y'] < 0 
      ||snake[0]['y'] > gameSize - 1
    ){
      borderCrossed = true;
    }
    return borderCrossed;
  }
  //Returns true if snake bite itself
  const checkSnakeBody = () => {
    let biteItself = false;
    const snakeCopy = [...snake];
    const head = snakeCopy.shift();
    snakeCopy.forEach((segment) => {
      if(segment.x === head.x && segment.y === head.y){
        biteItself = true;
      }
    })
    return biteItself;
  }


  useEffect(() => {
    //Checking lose conditions
    if(checkBorders() || checkSnakeBody()){
      gameOver()
    }
    else(
      setEntities([...snake])
    )
  },[snake])

  const updateGame = () => {
    if(pending){
      moveSnake()
    }
  }

  
  return {updateSnakeDirection, entities, updateGame}
}

export default useGame;