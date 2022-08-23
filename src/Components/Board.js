import React, { useState } from "react";
import Square from "./Square";
import CalculateWinner from "./Winner";

const Board = () => {
  const initialSquares = Array(9).fill(null); /* içi boş 9 elemanlı array oluştur */
  const [squares, setSquares] = useState(initialSquares); /* başlangıçta squaresları boş gösterir. */
  const [xIsNext, setXIsNext] = useState(true); /* isNext başlangıç değeri true */
  const handleClick = (i) => {
    const newSquares = [...squares];

    const winnerDeclared = Boolean(CalculateWinner(newSquares));
    const squareFilled = Boolean(newSquares[i]);
    if(winnerDeclared || squareFilled) {
        return;
    }

    newSquares[i] = xIsNext ? "X" : "O"; /* isNext true ise sıra X oyuncusunda. false ise O oyuncusunda */
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = CalculateWinner(squares);

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="status">
      {status}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
