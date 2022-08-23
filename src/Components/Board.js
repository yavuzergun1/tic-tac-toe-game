import React, { useState } from "react";
import Square from "./Square";
import Success from "./Success";
import CalculateWinner from "./Winner";

const Board = () => {
  const initialSquares = Array(9).fill(null); /* içi boş 9 elemanlı array oluştur */
  const [squares, setSquares] = useState(initialSquares); /* başlangıçta squaresları boş gösterir. */
  const [xIsNext, setXIsNext] = useState(true); /* isNext başlangıç değeri true */
  const handleClick = (i) => {
    const newSquares = [...squares];
console.log(squares);



    const winnerDeclared = Boolean(CalculateWinner(newSquares));
    const squareFilled = Boolean(newSquares[i]); /* tıklanma yapıldığında buraya değer atanır. Böylece Boolean true'ya geçer */
    // console.log(squareFilled);
    if(winnerDeclared || squareFilled) {
        return;  /* winnerDeclared veya squareFilled değerleri true ise yani kare tıklanmışsa veya oyun kazanılmışsa işlem yapılmasını engeller */
    }

    newSquares[i] = xIsNext ? "X" : "O"; /* isNext true ise sıra X oyuncusunda. false ise O oyuncusunda */
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  // 
  const winner = CalculateWinner(squares);
  console.log("winner",winner);
console.log(squares);

let isFinished = squares.some(square => square == null) /* false ise tüm kareler açıldı demek */
console.log("bitmedi",isFinished);


  return (
    <> 
    <div className="status">
   {isFinished ? ( winner ? <Success setSquares={setSquares} initialSquares={initialSquares} winner= {winner}/> : `Next player: ${xIsNext ? "X" : "O"}`) : "berabere kaldı"}
   
      </div>
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
      </>
  );
};

export default Board;
