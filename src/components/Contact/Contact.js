import React from 'react'
import { useMutation } from '@tanstack/react-query'
import './Contact.scss'

export const Contact = () => {
  // const mutation = useMutation({
  //   mutationFn: (data) => {
  //     return fetch('https://script.google.com/macros/s/AKfycbyNWurvyJh76yWf9YU286MIseIKoG377Id7fyS-CjnD9Kj0J4wsEPHtYNdvt8QAapN6bQ/exec',
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
    fetch('https://script.google.com/macros/s/AKfycbyNWurvyJh76yWf9YU286MIseIKoG377Id7fyS-CjnD9Kj0J4wsEPHtYNdvt8QAapN6bQ/exec',
      {
        method: "POST",
        body: userData
      }).then((res) => res.json()).then((date) => console.log(date)).catch((error) =>console.log(error))
    // mutation.mutate(userData)
  }

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