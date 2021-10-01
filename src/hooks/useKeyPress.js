import { useEffect, useState, useRef } from "react";

const useKeyPress = () => {
  const [pressedKey, setPressedKey] = useState('');
  const [pressEvent, setPressEvent] = useState(null);
  const keyUp = useRef(true);

  const handleKeyDown = (event) => {
    if(keyUp.current){
      keyUp.current = false
      setPressedKey(event.code);
      setPressEvent(event);
    }
  };

  const handleKeyUp = (event) => {
    keyUp.current = true
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pressEvent]);

  return {pressedKey, pressEvent}
}

export default useKeyPress;