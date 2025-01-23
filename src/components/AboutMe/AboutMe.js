import React from 'react'
import profilePicture from '../../assets/images/profile-picture.svg'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.svg'
import youtube from '../../assets/images/youtube.png'
import './AboutMe.scss'

export const AboutMe = () => {
  return (
    <div className='wrapper'>
      <div className='information'>
        <div className='text'>
          <h3 className='greetings'>Hi there!</h3>
          <p>
            I’m Mildred, a passionate Mexican web developer,
            a coffee lover, and a content creator. I started my
            journey when I decided to study Software engineering
            in 2015, but I fell in love with my career until
            2018 when I joined a BootCamp and knew the power
            of being a developer. Now, after 4 years working in
            different companies, I realize that a developer is not
            only a person who codes and delivers on time, it's also
            the engaged with the product and its quality. While it's
            common for developers to implement features without questioning the
            purpose, I take a different approach.  Before coding a feature
            or making a modification, I try to understand the reason behind
            that change. This helps me gain a deeper familiarity with the
            product and enables me to propose ideas and improvements that
            contribute to its overall success.
          </p>
        </div>
        <div className='social-media'>
          <a href='https://www.instagram.com/soymildredsilva' target="_blank" rel="noopener noreferrer" className='mr-10'>
            <img src={instagram} />
          </a>
          <a href='https://x.com/soymildredsilva' target="_blank" rel="noopener noreferrer" className='mr-10'>
            <img src={twitter} />
          </a>
          <a href='https://www.youtube.com/@soymildredsilva' target="_blank" rel="noopener noreferrer">
            <img src={youtube} className='youtube'/>
          </a>
        </div>
      </div>
      <div className='profile-picture'>
        <img src={profilePicture} loading="lazy"/>
      </div>
    </div>
  )
}