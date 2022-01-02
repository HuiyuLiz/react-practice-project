import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../UI/Button'
import Modal from '../../components/UI/Modal'

const AddUserForm = ({ onAddUser }) => {
  const [userName, setUserName] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState(null)

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value)
  }

  const setErrorHandler = (title, content) => {
    setError({
      title: title || 'Invalid',
      content: content || 'Please enter a valid value.'
    })
  }

  const validForm = (userName, age) => {
    if (userName === '' || age === '') {
      setErrorHandler('Invalid inputs', 'Please enter a valid name and age.')
      return false
    }
    if (+age < 1) {
      setErrorHandler('Invalid age', 'Please enter a valid age.')
      return false
    }
    if (userName !== '' || age !== '') return true
  }
  const submitForm = (e) => {
    e.preventDefault()
    const isValid = validForm(userName, age)
    if (!isValid) return
    const data = {
      name: userName,
      age: age
    }
    onAddUser(data)
    resetInputs()
  }

  const resetInputs = () => {
    setUserName('')
    setAge('')
  }

  const closeModal = () => {
    setError(null)
  }

  return (
    <>
      {error && <Modal title={error.title} content={error.content} onModalHandler={closeModal}></Modal>}
      <form>
        <div className="mb-3">
          <label htmlFor="UserName" className="form-label">User Name</label>
          <input type="text" className="form-control" id="UserName" value={userName} onChange={userNameChangeHandler} />
        </div>
        <div className="mb-3">
          <label htmlFor="Age" className="form-label">Age</label>
          <input type="number" className="form-control" id="Age" value={age} onChange={ageChangeHandler} />
        </div>
        <Button type="submit" className="btn-success" onClick={submitForm}>Submit</Button>
      </form>
    </>
  )
}

AddUserForm.propTypes = {
  onAddUser: PropTypes.func
}
export default AddUserForm
