const StatusBar = ({message, snakeLength}) => {
  return (
    <div className="statusBar neonText">
      <div className="messageBox">
        <div className="biggerText">{message.top}</div>
        <div>{message.bottom}</div>
      </div>
      <div>SNAKE LENGTH: {snakeLength}</div>
    </div>
  )
}

export default StatusBar;