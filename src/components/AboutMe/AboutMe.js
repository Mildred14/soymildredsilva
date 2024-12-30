import React from 'react'
import profilePicture from '../../assets/images/profile-picture.svg'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.svg'
import './AboutMe.scss'

export const AboutMe = () => {
  return (
    <div className='wrapper'>
      <div className='information'>
        <div className='text'>
          <h3 className='greetings'>Hi there!</h3>
          <p>
            I’m Mildred, a passionate Mexican web developer,
            a coffee lover, and a content creator.
            Long story short, I decided to study Software Engineering in
            <span className='year'> 2015</span>,
            but honestly, I was not sure about this decision,
            and it wasn’t until the last year of the University
            that I realized that I took the best decision.
            What changed it? A BootCamp where I had the opportunity
            to develop a project for a real client and I had a
            mentor that taught me the beauty of being a web developer.
          </p>
        </div>
        <div className='social-media'>
          <a href='https://www.instagram.com/soymildredsilva' target="_blank" rel="noopener noreferrer" className='instagram'>
            <img src={instagram} />
          </a>
          <a href='https://x.com/soymildredsilva' target="_blank" rel="noopener noreferrer">
            <img src={twitter} />
            </a>
        </div>
      </div>
      <div className='profile-picture'>
        <img src={profilePicture} />
      </div>
    </div>
  )
}