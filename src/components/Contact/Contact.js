import React, { useEffect, useState } from 'react'
import { Alert } from '../Alert/Alert'
import './Contact.scss'

export const Contact = () => {
  const [response, setResponse]= useState('')
  const [errorMsg, setErrorMsg]= useState('')
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({name: '', email: '', message: ''});
  const [target, setTarget] =  useState('')
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (loading) {
      fetch('https://script.google.com/macros/s/AKfycbzy1I0X9QDkywx3uGsrIRAPuV0NvzDWNp5po8cbPxmt70q1dtDKV_c2TJJ4-ep-MZvJWw/exec',
        {
          method: "POST",
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: (`name=${userData.name}&email=${userData.email}&message=${userData.message}`),
        })
        .then((res) => res.text())
        .then((data) => {
          target.reset()
          setResponse(data)
          setShowAlert(true)
          setLoading(false)
        })
        .catch((error) => {
          setErrorMsg(error)
          setShowAlert(true)
          setLoading(false)
        })
      setShowAlert(false)
    }
  }, [loading])

  const handleSubmit = (event) => {
    event.preventDefault()
    setTarget(event.target)
    const formData = new FormData(event.target)
    setUserData(Object.fromEntries(formData))
    setLoading(true)
  }


  return (
    <>
      {(showAlert && response.length > 1) && (<Alert msg={response} status='success' />)}
      {(showAlert && errorMsg) && (<Alert msg={response} status='error' />)}
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