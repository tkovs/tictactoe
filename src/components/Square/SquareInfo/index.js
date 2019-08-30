import React from 'react'
import './index.css'
import PropTypes from 'prop-types'

const SquareInfo = props => {
  return (
    <div className="square square-info">{props.value}</div>
  )
}

SquareInfo.propTypes = {
  value: PropTypes.number.isRequired
}

export default SquareInfo