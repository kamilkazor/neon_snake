const Display = () => {
  const displaySize = "500px";
  const fieldSize = "10px"
  
  const displayStyle = {
    width: displaySize,
    height: displaySize,
    border: "1px solid black"
  }
  const fieldStyle = {
    width: fieldSize,
    height: fieldSize,
    backgroundColor: "black",
    border: "1px solid white"
  }
  
  return (
    <div style={displayStyle}>
      <div style={fieldStyle}></div>
    </div>
  );
}


export default Display;