import React from 'react'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.svg'
import emailIcon from '../../assets/images/email-icon.svg'
import './Contact.scss'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-info'>
        <img src={emailIcon}/>
        <div>
          <p className='email'>Email</p>
          <a href="mailto:mildrednatalys@gmail.com">hello@soymildredsilva.com</a>
        </div>
      </div>
      <div className='social-media'>
        <a href='https://www.instagram.com/soymildredsilva' target="_blank" rel="noopener" className='instagram'>
          <img src={instagram} />
        </a>
        <a href='https://x.com/soymildredsilva' target="_blank" rel="noopener">
          <img src={twitter} />
        </a>
      </div>
    </div>
  )
}