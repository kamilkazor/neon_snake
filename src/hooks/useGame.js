import { useEffect, useState } from "react"

const useGame = (gameSize) => {
  const [pending, setPending] = useState(true);
  const [gameCount, setGameCount] = useState(0);
  const [food, setFood] = useState(null)
  const [snake, setSnake] = useState([
    {x: 2, y: 0, type: 'snake-empty'},
    {x: 1, y: 0, type: 'snake-empty'},
    {x: 0, y: 0, type: 'snake-empty'},
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
  //Moving snake in current direction, growing snake
  const moveSnake = () => {
    const head = snake[0]
    let newHead
    const updateSnake = (newHead) => {
      const updatedSnake = [...snake];
      updatedSnake.unshift(newHead);
      let tail = updatedSnake.pop();
      if(tail.type === 'snake-full'){
        tail.type = 'snake-empty';
        updatedSnake.push(tail);
      }
      setSnake(updatedSnake)
    }
    switch (snakeDirection) {
      case 'RIGHT':
        newHead = {...head, type: 'snake-empty'}
        newHead.x++
        updateSnake(newHead)
        break;
      case 'LEFT':
        newHead = {...head, type: 'snake-empty'}
        newHead.x--
        updateSnake(newHead)
        break;
      case 'UP':
        newHead = {...head, type: 'snake-empty'}
        newHead.y--
        updateSnake(newHead)
        break;
      case 'DOWN':
        newHead = {...head, type: 'snake-empty'}
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

  //Creates food in random empty field
  const addFood = () => {
    let emptyFields = [];
    let snakeFields = [];
    snake.forEach((segment) => {
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
    setFood(newFood);
    return newFood;
  }
  //Creates new food if there is no or has been eaten
  const checkFood = () => {
    let currentFood;
    let currentSnake;
    if(!food){
      currentFood = addFood();
    }
    else{
      currentFood = food;
    }
    if(snake[0]['x'] === currentFood['x'] && snake[0]['y'] === currentFood['y']){
      currentFood = addFood();
      currentSnake = [...snake];
      currentSnake[0]['type'] = 'snake-full';
    }
    else{
      currentSnake = snake;
    }
    return {currentFood, currentSnake};
  }

  useEffect(() => {
    //Checking lose conditions
    if(checkBorders() || checkSnakeBody()){
      gameOver()
    } 
    else{
      let {currentFood, currentSnake} = checkFood();
      setEntities([...currentSnake, currentFood]);
    }
  },[gameCount])

  const updateGame = () => {
    if(pending){
      moveSnake()
      setGameCount(gameCount + 1)
    }
  }

  
  return {updateSnakeDirection, entities, updateGame}
}

export default useGame;