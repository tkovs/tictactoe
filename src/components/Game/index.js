import React from 'react'
import { connect } from 'react-redux'
import { tickSquare } from '../../actions'
import './index.css'
import Board from '../Board'

const mapStateToProps = ({ history, stepNumber }) => ({
  history, stepNumber
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: index => {
    dispatch(tickSquare(index))
  }
})

const Game = (props) => {
  const history = props.history
  const current = history[props.stepNumber]

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => props.handleClick(i)}
        />
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)