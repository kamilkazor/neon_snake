const Field = ({entity, size}) => {
  const fieldLeft = entity.x * size;
  const fieldTop = entity.y * size;

  const fieldStyle = {
    width: size,
    height: size,
    left: fieldLeft,
    top: fieldTop
  }



  let classes = `fieldContent ${entity.type}`
  
  return(
    <div className="field" style={fieldStyle}>
      <div className={classes}></div>
    </div>
  )
}


export default Field;