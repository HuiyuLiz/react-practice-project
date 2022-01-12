import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop'
import PropTypes from 'prop-types'
import Modal from './Modal'

const ErrorModal = ({ title, content, buttonText, onModalHandler }) => {
  return (
   <Fragment>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal title={title} content={content} buttonText={buttonText} onModalHandler={onModalHandler}></Modal>,
        document.getElementById('modal-root')
      )}
   </Fragment>
  )
}

ErrorModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  buttonText: PropTypes.string,
  onModalHandler: PropTypes.func
}
export default ErrorModal
