const Field = ({entity, size}) => {
  const fieldLeft = entity.x * size;
  const fieldTop = entity.y * size;

  const fieldStyle = {
    width: size,
    height: size,
    left: fieldLeft,
    top: fieldTop
  }



  let classes = `field ${entity.type}`
  
  return(
    <div className={classes} style={fieldStyle}></div>
  )
}


export default Field;