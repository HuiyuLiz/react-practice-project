import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, className, children, onClick }) => {
  return (
    <button type={type || 'button'} className={`btn ${className || 'btn-primary'}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func
}
export default Button
