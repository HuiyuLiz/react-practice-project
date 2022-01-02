import React from 'react'
import PropTypes from 'prop-types'
const UsersList = ({ users, onDeleteUser }) => {
  const deleteUser = (Id) => {
    onDeleteUser(Id)
  }

  return (
    <ul className="list-group mb-5">
      {users.length > 0 && users.map(user => (
        <li className="list-group-item d-flex justify-content-between align-items-stretch" key={user.name}>
          <div>
            <div className="h5">
              {user.name}
            </div>
            <div>
              {user.age} years old.
            </div>
          </div>
          <div className='ps-3' onClick={() => deleteUser(user.Id)}>
            <button type="button" className="btn-close"></button>
          </div>
        </li>
      ))}
      {users.length === 0 && <div>No Data.</div>}
    </ul>
  )
}

UsersList.propTypes = {
  users: PropTypes.array,
  onDeleteUser: PropTypes.func
}
export default UsersList
