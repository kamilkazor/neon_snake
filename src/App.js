import Display from "./components/Display";

const App = () => {

  const snake = [
    {x: 3, y: 4},
    {x: 3, y: 5},
    {x: 3, y: 6},
    {x: 4, y: 6},
    {x: 4, y: 7},
    {x: 4, y: 8}
  ]


  return (
    <div>
      <Display gameSize={25} entities={snake} />
    </div>
  )
}

export default App;
