import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Form from './Form'
import axios from 'axios'

export default function New() {
  // Hooks
  const history = useHistory()
  
  // Functions
  function onFormSubmit(user) {
    axios.post('https://603d77d348171b0017b2d4ff.mockapi.io/users', user)
      .then(() => {
          history.push('/')
        }
      )
  }
  
  return (
    <div>
      <div className='navigation'>
        <div className="container">
          <div className="navigation-wrap">
            <h2>New User</h2>
            <Link to='/'>Index</Link>
          </div>
        </div>
      </div>
      <Form submitButtonTitle='Create' onFormSubmit={ onFormSubmit } />
    </div>
  )
}
