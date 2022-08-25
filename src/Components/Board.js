import React, { useState } from "react";
import Square from "./Square";
import Success from "./Success";
import CalculateWinner from "./Winner";
import TieUp from "./TieUp";
import { useEffect } from "react";

const Board = () => {
  const initialSquares =
    Array(9).fill(null); /* içi boş 9 elemanlı array oluştur */
  const [squares, setSquares] =
    useState(initialSquares); /* başlangıçta squaresları boş gösterir. */
  const [isNext, setIsNext] =
    useState(true); /* isNext başlangıç değeri true */
  const [random, setRandom] = useState(); /* random 0 veya 1 değeri verir */

  useEffect(() => {
    var integer = Math.floor(Math.random() * 2);
    if (integer === 0) {
      setRandom("O");
    } else {
      setRandom("X");
    }
    setIsNext(!isNext)
  }, [squares]);

  const handleClick = (i) => {
    /* eğer random 0 ise "O" değeri ver. 1 ise "X" değeri ver*/

    const newSquares = [
      ...squares,
    ]; /* kare açıldığında açılan değeri newSquares dizisine ekler */

    const winnerDeclared = Boolean(
      CalculateWinner(newSquares)
    ); /* kazanan olduğunda true değeri verir */
    const squareFilled = Boolean(
      newSquares[i]
    ); /* tıklanma yapıldığında buraya değer atanır. Böylece Boolean true'ya geçer */

    // console.log(squareFilled);
    if (winnerDeclared || squareFilled) {
      return; /* winnerDeclared veya squareFilled değerleri true ise yani kare tıklanmışsa veya oyun kazanılmışsa işlem yapılmasını engeller */
    }
    console.log(random);
    newSquares[i] =
      random; /* isNext true ise sıra X oyuncusunda. false ise O oyuncusunda */
    setSquares(newSquares);
    // setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  //
  const winner = CalculateWinner(squares);
  const winnerLine = winner && winner[1];

  let isFinished = squares.some(
    (square) => square == null
  ); /* false ise tüm kareler açıldı demek */

  return (
    <>
      <div className="status">
        {isFinished ? (
          winner ? (
            <Success
              setSquares={setSquares}
              initialSquares={initialSquares}
              winner={winner[0]}
            />
          ) : (
            `Next player: ${isNext ? "2. Player" : "1. Player"}`
          )
        ) : winner ? (
          <Success
            setSquares={setSquares}
            initialSquares={initialSquares}
            winner={winner[0]}
          />
        ) : (
          <TieUp setSquares={setSquares} initialSquares={initialSquares} />
        )}
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
