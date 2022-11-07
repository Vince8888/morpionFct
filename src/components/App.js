import React, { useState } from 'react';
import '../css/App.css';
import Board from './Board';

const App = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [count, setCount] = useState(0);
  const END_GAME = 8;

  const update = (id) => {
    if (board[id]) {
      alert('Case déjà sélectionnée, veuillez sélectionner une autre case');
    }
    else {
      setCount(count + 1);
      let boardTmp = board.slice();
      boardTmp[id] = player;
      setBoard(boardTmp);
      player === 'X' ? setPlayer('O') : setPlayer('X');
      if (!calculateWinner(boardTmp) && count === END_GAME) {
        alert('Perdu');
        reset();
      }
    }
  }
  const reset = () => {
    setBoard(new Array(9).fill(null));
    setCount(0);
  }

  const displayWinner = () => {
    if (calculateWinner(board)) {
      return <div className="game" ><p>Le gagnant est : {calculateWinner(board)}</p><button onClick={() => reset()}>Recommencer</button></div>
    }
  }

  const calculateWinner = (squares) => {
    const winCombi = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winCombi.length; i++) {
      const [a, b, c] = winCombi[i];
      if (squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    } return null;
  }

  return (
    <div className="App-header">
      <h1>Tour du joueur : {player}</h1>
      <Board player={player} sendId={update} board={board} />
      {displayWinner()}
    </div>
  );
}

export default App;
