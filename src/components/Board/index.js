import React from 'react'
import './index.css'
import SquareButton from '../Square/SquareButton'
import SquareInfo from '../Square/SquareInfo'
import PropTypes from 'prop-types'

const Board = (props) => {
  const squares = props.squares
  let i = 0
  let squareInfoKey = 0

  const renderSquareButton = (i, step) => (
    <SquareButton
      value={squares[i]}
      onClick={() => props.handleClick(i, step)}
      key={i}
    />
  )

  return (
    <>
      <div className="board-row">
        { [0, 1, 2].map((col) => <SquareInfo value={col} key={squareInfoKey++} />) }
      </div>

      { [0, 1, 2].map((row) => 
        <div className="board-row" key={i}>
          { [0, 1, 2].map((col) => renderSquareButton(i++, props.step)) }
          { <SquareInfo value={squareInfoKey++} />}
        </div>
      ) }
    </>
  )
}

Board.propTypes = {
  handleClick: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired
}

export default Board