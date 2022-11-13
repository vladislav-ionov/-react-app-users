import React, { useState, useEffect } from 'react'

export default function Form(props) {
  // Variables
  const [name, setName] = useState(props.name)
  const [city, setCity] = useState(props.city)
  const [address, setAddress] = useState(props.address)
  const [zipcode, setZipcode] = useState(props.zipcode)
  
  // Effects
  useEffect(() => {
    setName(props.name)
    setCity(props.city)
    setAddress(props.address)
    setZipcode(props.zipcode)
  }, [props.name, props.city, props.address, props.zipcode])
  
  // Functions
  function onSubmit(event) {
    event.preventDefault()
    
    const user = {
      name: name,
      city: city,
      address: address,
      zipcode: zipcode
    }
    props.onFormSubmit(user)
  }
  
  return (
    <div className='container'>
      <form onSubmit={ onSubmit } className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' id='name' value={ name || '' } placeholder='Full Name'
                 onChange={ e => setName(e.target.value) } />
        </div>
        <div className='form-group'>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' value={ city || '' } placeholder='City'
                 onChange={ e => setCity(e.target.value) } />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' value={ address || '' } placeholder='Address'
                 onChange={ e => setAddress(e.target.value) } />
        </div>
        <div className='form-group'>
          <label htmlFor='zipcode'>ZIP code</label>
          <input type='text' id='zipcode' value={ zipcode || '' } placeholder='ZIP code'
                 onChange={ e => setZipcode(e.target.value) } />
        </div>
        <button type='submit'>{ props.submitButtonTitle }</button>
      </form>
    </div>
  )
}
