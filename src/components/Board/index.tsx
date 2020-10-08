import React, { FC } from 'react'
import './index.css'
import SquareButton from '../Square/SquareButton'
import SquareInfo from '../Square/SquareInfo'

interface BoardProps {
  handleClick: (index: number, step: string) => void
  step: string
  squares: number[]
}

type Props = BoardProps

const Board: FC<Props> = (props: Props) => {
  const squares = props.squares
  let i = 0
  let squareInfoKey = 0

  const renderSquareButton = (i: number, step: string) => (
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

export default Board