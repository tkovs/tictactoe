import React, { FC } from 'react'
import './index.css'

interface SquareInfoProps {
  value: number
}

type Props = SquareInfoProps

const SquareInfo: FC<Props> = ({ value }: Props) => (
  <div className="square square-info">{value}</div>
)

export default SquareInfo
