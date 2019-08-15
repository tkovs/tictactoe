import React from 'react'
import '../index.css'
import './index.css'

const SquareInfo = props => {
  return (
    <div className="square square-info">{props.value}</div>
  )
}

export default SquareInfo