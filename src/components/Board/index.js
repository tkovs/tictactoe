import React from 'react'
import './index.css'
import SquareButton from '../Square/SquareButton'
import SquareInfo from '../Square/SquareInfo'

class Board extends React.Component {
  renderSquare(i) {
    return (
      <SquareButton
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    let i = 0

    return (
      <>
        <div className="board-row">
          { [0, 1, 2].map((col) => <SquareInfo value={col} />) }
        </div>

        { [0, 1, 2].map((row) => 
          <div className="board-row">
            { [0, 1, 2].map((col) => this.renderSquare(i++)) }
            { <SquareInfo value={row} />}
          </div>
        ) }
      </>
    )
  }
}

export default Board