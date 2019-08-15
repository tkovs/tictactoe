import React from 'react'
import '../index.css'
import './index.css'

const SquareButton = props => {
  return (
    <button className="square square-btn" onClick={props.onClick} >
      {props.value}
    </button>
  )
}

export default SquareButton