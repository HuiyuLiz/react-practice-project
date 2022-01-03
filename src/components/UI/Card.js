import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ className, children }) => {
  return (
    <div className={`card ${className || ''}`}>
        <div className="card-body">
        {children}
        </div>
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default Card
