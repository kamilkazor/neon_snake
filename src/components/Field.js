const Field = ({entity, size}) => {
  const fieldLeft = entity.x * size;
  const fieldTop = entity.y * size;

  const fieldStyle = {
    width: size,
    height: size,
    left: fieldLeft,
    top: fieldTop,
    backgroundColor: "black",
    boxSizing: "border-box",
    border: "1px solid white"
  }
  
  return(
    <div className="field" style={fieldStyle}></div>
  )
}


export default Field;