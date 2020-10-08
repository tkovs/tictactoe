import React, { FC } from 'react'
import './index.css'

interface SquareButtonProps {
  onClick: () => void,
  value: number,
}

type Props = SquareButtonProps

const SquareButton: FC<Props> = ({ onClick, value } : Props) => (
  <button className="square square-btn" onClick={onClick}>
    {value}
  </button>
)

export default SquareButton