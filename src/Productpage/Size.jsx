// Size.js
import React from "react";

const Size = ({ size, onClick, isSelected }) => {
  const handleClick = () => {
    onClick(size);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        isSelected ? "bg-slate-200 border-slate-400" : " border"
      } cursor-pointer hover:bg-slate-100 hover:border-slate-400 p-3 w-7 h-7 m-2 flex items-center text-center justify-center`}
    >
      <span>{size}</span>
    </div>
  );
};

export default Size;
