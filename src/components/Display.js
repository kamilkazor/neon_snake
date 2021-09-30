import Field from "./Field";

const Display = ({gameSize, entities}) => {
  const displaySize = 500;
  const fieldSize = displaySize / gameSize;

  const drawFields = (entities) => {
    return entities.map((entity) => <Field entity={entity} size={fieldSize} /> )
  }
  
  const displayStyle = {
    width: displaySize,
    height: displaySize,
    border: "1px solid black"
  }
  
  return (
    <div className="display" style={displayStyle}>
      {drawFields(entities)}
    </div>
  )
}


export default Display;