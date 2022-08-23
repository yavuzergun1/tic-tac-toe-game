import React from "react";

const Square = ({value, onClick}) => {
  return (
    <button className="square-styles" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
