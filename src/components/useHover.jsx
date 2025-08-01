import { useState } from "react";

function useHover() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  return [isMouseOver, handleMouseOut, handleMouseOver];
}

export default useHover;
