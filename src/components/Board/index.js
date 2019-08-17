import React from 'react'
import './index.css'
import SquareButton from '../Square/SquareButton'
import SquareInfo from '../Square/SquareInfo'

const Board = (props) => {
  const squares = props.squares
  let i = 0

  const renderSquareButton = (i) => (
    <SquareButton
      value={squares[i]}
      onClick={() => props.handleClick(i)}
    />
  )

  return (
    <>
      <div className="board-row">
        { [0, 1, 2].map((col) => <SquareInfo value={col} />) }
      </div>

      { [0, 1, 2].map((row) => 
        <div className="board-row">
          { [0, 1, 2].map((col) => renderSquareButton(i++)) }
          { <SquareInfo value={row} />}
        </div>
      ) }
    </>
  )
}

export default Board