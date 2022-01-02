import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import classes from './Model.module.css'

const Modal = ({ title, content, buttonText, onModalHandler }) => {
  return (
   <div>
      <div className={classes.backdrop} ></div>
      <div className="modal d-block" id="Modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalLabel">{title || 'title'}</h5>
              <button type="button" className="btn-close" onClick={onModalHandler}></button>
            </div>
            <div className="modal-body">
              {content || 'content'}
            </div>
            <div className="modal-footer">
              <Button type="button" onClick={onModalHandler}>{buttonText || 'Close'}</Button>
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  buttonText: PropTypes.string,
  onModalHandler: PropTypes.func
}
export default Modal
