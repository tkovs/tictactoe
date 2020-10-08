import React, { FC } from 'react'
import './index.css'
import Board from '../../containers/Board'
import History from '../../containers/History'

const Game: FC<{}> = () => (
  <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info">
      <History />
    </div>
  </div>
)

export default Game