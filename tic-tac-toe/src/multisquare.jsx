import {useState} from 'react'
import Square from './square.jsx'
import './multi.css'
import calculateWinner from './calculatewinner.js';

export default function Multisquare() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    //this prevents overwriting a square that has already been filled
   if(squares[i] || calculateWinner(squares)){
    return;
   }
   const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
    
    let winner = calculateWinner(squares);
    const result = winner? winner.result : null;
    const winningLine = winner ? winner.line : [];
    
    let status ;
    if(winner){
      status = 'Winner: ' + winner;
    }else{
      status ='Next player:' +(xIsNext ? 'X' : 'O');
    }
  
  return (
    <div>
         
      <div className="status">{status}</div>
      <div>
        <Square value={squares[0]} onClickSquare={() => handleClick(0)} />
        <Square value={squares[1]} onClickSquare={() => handleClick(1)} />
        <Square value={squares[2]} onClickSquare={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onClickSquare={() => handleClick(3)} />
        <Square value={squares[4]} onClickSquare={() => handleClick(4)} />
        <Square value={squares[5]} onClickSquare={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onClickSquare={() => handleClick(6)} />
        <Square value={squares[7]} onClickSquare={() => handleClick(7)} />
        <Square value={squares[8]} onClickSquare={() => handleClick(8)} />
      </div>
    </div>
  );
}

