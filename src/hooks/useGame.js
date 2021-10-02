import { useEffect, useState, useRef } from "react"

const useGame = (gameSize) => {
  const [gameCount, setGameCount] = useState(0);
  const pending = useRef(true);
  const snakeInitState = [
    {x: 2, y: 0, type: 'snakeEmpty'},
    {x: 1, y: 0, type: 'snakeEmpty'},
    {x: 0, y: 0, type: 'snakeEmpty'},
  ]
  const snake = useRef(snakeInitState);
  const snakeDirection = useRef('RIGHT');
  const food = useRef(null);
  const [entities, setEntities] = useState([...snake.current])
  const [gameStatus, setGameStatus] = useState({status: 'pending', snakeLength: snake.current.length})
  
  //Stops the game
  const gameOver = () => {
    pending.current = false;
  }
  // Restarts the game
  const gameRestart = () => {
    food.current = null;
    snake.current = snakeInitState;
    snakeDirection.current = 'RIGHT';
    pending.current = true;
    setEntities([...snake.current])
    setGameStatus({status: 'pending', snakeLength: snake.current.length})
  }

  
  // const [snakeDirection, setSnakeDirection] = useState('RIGHT');
  //Checking if new direction is allowed and assigning new value
  const updateSnakeDirection = (newDirection) => {
    if(newDirection === 'RIGHT' && snake.current[0]['x'] >= snake.current[1]['x']) snakeDirection.current = newDirection;
    if(newDirection === 'LEFT' && snake.current[0]['x'] <= snake.current[1]['x']) snakeDirection.current = newDirection;
    if(newDirection === 'DOWN' && snake.current[0]['y'] >= snake.current[1]['y']) snakeDirection.current = newDirection;
    if(newDirection === 'UP' && snake.current[0]['y'] <= snake.current[1]['y']) snakeDirection.current = newDirection;
  }
  //Moving snake in current direction, growing snake
  const moveSnake = () => {
    const head = snake.current[0]
    let newHead
    const updateSnake = (newHead) => {
      const updatedSnake = [...snake.current];
      updatedSnake.unshift(newHead);
      let tail = updatedSnake.pop();
      if(tail.type === 'snakeFull'){
        tail.type = 'snakeEmpty';
        updatedSnake.push(tail);
      }
      snake.current = updatedSnake;
    }
    switch (snakeDirection.current) {
      case 'RIGHT':
        newHead = {...head, type: 'snakeEmpty'}
        newHead.x++
        updateSnake(newHead)
        break;
      case 'LEFT':
        newHead = {...head, type: 'snakeEmpty'}
        newHead.x--
        updateSnake(newHead)
        break;
      case 'UP':
        newHead = {...head, type: 'snakeEmpty'}
        newHead.y--
        updateSnake(newHead)
        break;
      case 'DOWN':
        newHead = {...head, type: 'snakeEmpty'}
        newHead.y++
        updateSnake(newHead)
        break;     
      default:
        break;
    }
  }


  //Returns true if border was crossed
  const checkBorders = () => {
    let borderCrossed = false;
    if(
      snake.current[0]['x'] < 0 
      || snake.current[0]['x'] > gameSize - 1
      || snake.current[0]['y'] < 0 
      ||snake.current[0]['y'] > gameSize - 1
    ){
      borderCrossed = true;
    }
    return borderCrossed;
  }
  //Returns true if snake bite itself
  const checkSnakeBody = () => {
    let biteItself = false;
    const snakeCopy = [...snake.current];
    const head = snakeCopy.shift();
    snakeCopy.forEach((segment) => {
      if(segment.x === head.x && segment.y === head.y){
        biteItself = true;
      }
    })
    return biteItself;
  }

  //Creates food in random empty field
  const addFood = () => {
    let emptyFields = [];
    let snakeFields = [];
    snake.current.forEach((segment) => {
      snakeFields.push(`${segment.x}:${segment.y}`);
    })
    for(let x = 0; x < gameSize; x++){
      for (let y = 0; y < gameSize; y++){
        let field = `${x}:${y}`
        if(!snakeFields.includes(field)){
          emptyFields.push(field)
        } 
      }
    }
    let randomField = emptyFields[Math.floor(Math.random()*emptyFields.length)];
    randomField = randomField.split(':');
    let newFood = {x: parseInt(randomField[0]), y: parseInt(randomField[1]), type: 'food'};
    food.current = newFood;
  }
  //Creates new food if there is no or has been eaten
  const checkFood = () => {
    if(!food.current){
      addFood();
    }
    if(snake.current[0]['x'] === food.current['x'] && snake.current[0]['y'] === food.current['y']){
      addFood();
      snake.current[0]['type'] = 'snakeFull';
    }
  }

  useEffect(() => {
    //Checking lose conditions
    if(checkBorders() || checkSnakeBody()){
      gameOver()
      setGameStatus({...gameStatus, status: 'GAME-OVER'})
    } 
    else{
      checkFood();
      setEntities([...snake.current, food.current]);
      setGameStatus({...gameStatus, snakeLength: snake.current.length})
    }
  },[gameCount])

  const updateGame = () => {
    if(pending.current){
      moveSnake()
      setGameCount(gameCount + 1)
    }
  }

  
  return {updateSnakeDirection, entities, updateGame, gameRestart, gameStatus}
}

export default useGame;