const StatusBar = ({message, snakeLength}) => {
  return (
    <div className="statusBar">
      <div className="messageBox">
        <div>{message.top}</div>
        <div>{message.bottom}</div>
      </div>
      <div>SNAKE LENGTH: {snakeLength}</div>
    </div>
  )
}

export default StatusBar;