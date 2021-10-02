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
  }
  
  return (
    <div className="displayFrame">
      <div className="display" style={displayStyle}>
        {drawFields(entities)}
      </div>
    </div>
  )
}


export default Display;