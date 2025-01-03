import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import './Contact.scss'

export const Contact = () => {
  const [response, setResponse]= useState('')
  const [errorMsg, setErrorMsg]= useState('')
  // const mutation = useMutation({
  //   mutationFn: (data) => {
  //     return fetch('https://script.google.com/macros/s/AKfycbzy1I0X9QDkywx3uGsrIRAPuV0NvzDWNp5po8cbPxmt70q1dtDKV_c2TJJ4-ep-MZvJWw/exec',
  //       {
  //         method: "POST",
  //         body: data
  //       })
  //   }
  // })

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    console.log(userData)
    fetch('https://script.google.com/macros/s/AKfycbzy1I0X9QDkywx3uGsrIRAPuV0NvzDWNp5po8cbPxmt70q1dtDKV_c2TJJ4-ep-MZvJWw/exec',
      {
        method: "POST",
        body: (`name=${userData.name}&email=${userData.email}&message=${userData.message}`),
      }).then((res) => res.json()).then((data) => setResponse(data)).catch((error) => setErrorMsg(error))
  }

  console.log(response)
  console.log(errorMsg)
  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label>
        Name:
      </label>
      <input name="name" className='input' />
      <label>
        Email:
      </label>
      <input name="email" className='input'/>
      <label>
        Message:
      </label>
      <textarea name="message" className='message-input'/>
      <button type="submit" className='CTA'>Get in touch</button>
    </form>
  )
}