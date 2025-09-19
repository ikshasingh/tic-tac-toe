import {useState} from 'react'
import calculateWinner from './calculatewinner.js';
import './square.css';
export default function Square({value , onClickSquare}) {

  return (
  <>
  <button  type = "button" className="square" onClick ={onClickSquare}  > {value}</button>
    </>
    


  );
}
