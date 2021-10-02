const StatusBar = ({message, snakeLength}) => {
  return (
    <div className="statusBar">
      <div>{message}</div>
      <div>Snake length: {snakeLength}</div>
    </div>
  )
}

export default StatusBar;