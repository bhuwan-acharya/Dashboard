import React from "react";
import { useStateContext } from "../context/ContextProvider";
const Button = ({ color, bgColor, size, text, borderRadius, icon }) => {
  const { handleClick, initialState } = useStateContext();
  return (
    <button
      type="button"
      onClick={() => handleClick(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-light-gray`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
