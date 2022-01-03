import React, { useState } from 'react'
import Card from './components/UI/Card'
import AddUserForm from './components/Users/AddUserForm'
import UsersList from './components/Users/UsersList'
import './App.css'

function App () {
  const [users, setUsers] = useState([{
    name: 'User',
    age: 6,
    Id: 1
  }, {
    name: 'User 2',
    age: 16,
    Id: 2
  }, {
    name: 'User 3',
    age: 26,
    Id: 3
  }])

  const addUserHandler = (data) => {
    const newUser = data
    newUser.Id = new Date().getTime()
    console.log('newUser', newUser)
    setUsers(preStatus => [...preStatus, newUser])
  }

  const deleteUserHandler = (Id) => {
    const newUsers = users.filter(user => user.Id !== Id)
    setUsers(newUsers)
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="h3 text-center mb-5"> React Practice Project</div>
      </div>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <Card className="mt-3">
            <AddUserForm onAddUser={addUserHandler}></AddUserForm>
          </Card>
        </div>
        <div className="col-md-8 mx-auto my-5">
          <div className="mb-3">Users:</div>
          <UsersList users={users} onDeleteUser={deleteUserHandler}></UsersList>
        </div>
      </div>
    </div>
  )
}

export default App
