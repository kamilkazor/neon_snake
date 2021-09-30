const Display = () => {
  const displaySize = "500px"

  const displayStyle = {
    width: displaySize,
    height: displaySize,
    border: "1px solid black"
  }
  
  return (
    <div style={displayStyle}></div>
  );
}


export default Display;