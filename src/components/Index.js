import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Index() {
  // State
  const [users, setUsers] = useState([])
  
  // Effects
  useEffect(() => {
    fetchUsers()
  }, [])
  
  // Functions
  async function fetchUsers() {
    const result = await axios.get('https://603d77d348171b0017b2d4ff.mockapi.io/users')
    setUsers(result.data)
  }
  
  async function performDelete(userID) {
    await axios.delete(`https://603d77d348171b0017b2d4ff.mockapi.io/users/${ userID }`)
    fetchUsers()
  }
  
  function deleteUser(event, userID) {
    event.preventDefault()
    performDelete(userID)
  }
  
  return (
    <div>
      <div className='navigation'>
        <div className='container'>
          <div className='navigation-wrap'>
            <h2>Users</h2>
            <Link to='/users/new'>New User</Link>
          </div>
        </div>
      </div>
      <div className='container'>
        <ul className='user-list'>
          { users.map(user =>
            <li key={ user.id }>
              { user.id } - { user.name }
              <div>
                <Link to={ `/users/${ user.id }` }>Show</Link>
                <Link to={ `/users/${ user.id }/edit` }>Edit</Link>
                <a href={ `/users/${ user.id }` } onClick={ (event) => {
                  deleteUser(event, user.id)
                } }>Delete</a>
              </div>
            </li>
          ) }
        </ul>
      </div>
    </div>
  )
}
