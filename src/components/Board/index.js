import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import { tickSquare, addHistory } from '../../actions'
import SquareButton from '../Square/SquareButton'
import SquareInfo from '../Square/SquareInfo'

const mapStateToProps = ({ history, board }) => ({
  squares: board.squares, stepNumber: history.stepNumber
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: index => {
    dispatch(tickSquare(index))
    dispatch(addHistory(index))
  }
})

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)