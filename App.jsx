import Button from '@mui/material/Button'; 
import { Alert } from '@mui/material';

import { useState } from 'react';


//fungsi kotak
function Square({value, onSquareClick}) {
  return (
    
    <Button className='square' color={value === null ? 'warning' :
      value === 'X' ? 'error' : 'info'}
      onClick={onSquareClick} variant="outlined">{value}</Button>
  );
}dwadaw
  //papan
export default function board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [warcolor, setWarcolor] = useState(true);

  function handleClick(i) {
    //fungsi jika ada isi arraynya, maka tidak dijalankan
    if (squares[i] || calculateWinner(squares)) return;

      const nextSquares = squares.slice();
    //jika isnext = true, maka x else o
    nextSquares[i] = xIsNext ? 'X' : 'O';
    //set arraynya
    setSquares(nextSquares);
    //set jadi false isnextnya
      setXIsNext(!xIsNext)
  }

  //fungsi pemenang
  const winner = calculateWinner(squares);
  let status = '';
  console.log(winner);

  if (winner) {
    status = 'Winner:' + winner;
  } else {
    status = 'Giliran Kamu ' + (xIsNext ? 'X' : 'O');
  }
  return (
    <>
      {/* <div className='status'>{status}</div> */}
      
      
      <div className='board'>
        <div className="row">

          <div className="col">
      <Square value={squares[0]} onSquareClick ={() => handleClick(0)}   />
      <Square value={squares[1]} onSquareClick ={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
      
          <div className="col">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick ={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            
          </div>
          <div className="col">

      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick ={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            
          </div>
      </div>
        <Alert variant="filled" className='status' severity={winner === 'X' ? 'error' : winner === 'O' ? 'info' : 'warning'}>{status}</Alert>
      </div>
      </>
  );
}
function calculateWinner(squares) {
  const rules = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < rules.length; i++) {
    const [a, b, c] = rules[i];

    if (squares[a] && squares[a] === squares[b] && squares[a]===squares[c]) {
      return squares[a];
      
    }
  }
  return false;

}