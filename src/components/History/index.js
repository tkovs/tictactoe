import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ history }) => ({
  history: history.history
})

const History = (props) => {
  const moves = props.history.map((step, move) => {
    const col = step.coordinates.col
    const row = step.coordinates.row

    const desc = move ?
      `Go to move #${move}, (${col}, ${row})` :
      'Go to game start'

    return (
      <li key={move}>
        <button>
          {desc}
        </button>
      </li>
    )
  })

  return (
    <>
      <div>Next player: ?</div>
      <ol>
        {moves}
      </ol>
    </>
  )
}

export default connect(
  mapStateToProps,
  null
)(History)