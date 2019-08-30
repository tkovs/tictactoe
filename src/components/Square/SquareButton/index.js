import React from 'react'
import './index.css'
import PropTypes from 'prop-types'

const SquareButton = props => {
  return (
    <button className="square square-btn" onClick={props.onClick} >
      {props.value}
    </button>
  )
}

SquareButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default SquareButton