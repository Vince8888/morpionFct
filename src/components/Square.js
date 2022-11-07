import React from 'react';
import '../css/Square.css';

const Square = (props) => {

    return (
        <button className="square" onClick={() => props.sendId(props.id)}>{props.board[props.id]}</button>
    )
}
export default Square;