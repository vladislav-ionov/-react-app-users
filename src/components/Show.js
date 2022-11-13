import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Show() {
  // Grab userID from Router
  let { userID } = useParams()
  
  // State
  const [user, setUser] = useState(0)
  
  // Effects
  useEffect(() => {
    async function fetchUser() {
      const result = await axios.get(`https://603d77d348171b0017b2d4ff.mockapi.io/users/${ userID }`)
      setUser(result.data)
    }
    
    fetchUser()
  }, [userID])
  
  return (
    <div>
      <div className='navigation'>
        <div className='container'>
          <div className='navigation-wrap'>
            <h2>User Details</h2>
            <Link to='/'>Index</Link>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='show-wrap'>
          <div className='show-element'>
            <p>ID: { user.id }</p>
            <p>Full Name: { user.name }</p>
            <p>City: { user.city }</p>
            <p>ZIP code: { user.zipcode }</p>
            <p>Address: { user.address }</p>
          </div>
        </div>
      </div>
    </div>
  )
}
