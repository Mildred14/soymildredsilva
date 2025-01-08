import React, { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Alert } from '../Alert/Alert'
import './Contact.scss'

export const Contact = () => {
  const [response, setResponse]= useState('')
  const [errorMsg, setErrorMsg]= useState('')
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    setResponse('')
    setErrorMsg('')
    setLoading(true)
    fetch('https://script.google.com/macros/s/AKfycbzy1I0X9QDkywx3uGsrIRAPuV0NvzDWNp5po8cbPxmt70q1dtDKV_c2TJJ4-ep-MZvJWw/exec',
      {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: (`name=${userData.name}&email=${userData.email}&message=${userData.message}`),
      })
      .then((res) => res.text())
      .then((data) => {
        event.target.reset()
        setResponse(data)
        setLoading(false)
      })
      .catch((error) => setErrorMsg(error))
  }

  return (
    <>
      {response && (<Alert msg={response} status='success' />)}
      {errorMsg && (<Alert msg={response} status='error' />)}
      <form className='contact-form' onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
        <input name="name" className='input' pattern="[a-zA-ZÀ-ÖØ-öø-ÿ.+ -]+"type="text" required />
        <label>
          Email:
        </label>
        <input name="email" className='input' type="email" required />
        <label>
          Message:
        </label>
        <textarea name="message" className='message-input' pattern="^[a-zA-Z0-9_.-]*$" required />
        <button type="submit" className='CTA'>{loading ? 'Sending info...' : 'Get in touch'}</button>
      </form>
    </>
  )
}