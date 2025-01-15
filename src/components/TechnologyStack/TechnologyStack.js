import React from 'react'
import typescript from '../../assets/images/typescript.svg'
import react from '../../assets/images/react.svg'
import rubyonrails from '../../assets/images/rubyonrails.svg'
import git from '../../assets/images/git.svg'
import html from '../../assets/images/html.svg'
import figma from '../../assets/images/figma.svg'
import css from '../../assets/images/css.svg'
import './TechnologyStack.scss'

export const TechnologyStack = () => {
  const stack = [
    {
      technology: 'React',
      description: 'Javascript library',
      logo: react
    },
    {
      technology: 'Ruby on Rails',
      description: 'Ruby framework',
      logo: rubyonrails
    },
    {
      technology: 'Typescript',
      description: 'Javascript library',
      logo: typescript
    },
    {
      technology: 'HTML',
      description: 'HyperText Markup Language',
      logo: html
    },
    {
      technology: 'CSS',
      description: 'Cascading Style Sheets',
      logo: css
    },
    {
      technology: 'Git',
      description: 'Version controller',
      logo: git
    },
    {
      technology: 'Figma',
      description: 'Design App',
      logo: figma
    },
  ]

  const displayStack = () => {
    return stack.map((val) => {
      return (
        <div className='tech-stack'>
          <div className='tech-logo'>
            <img src={val.logo} width='50'/>
          </div>
          <div className='tech-info'>
            <p className='tech-name'>{val.technology}</p>
            <p className='tech-description'>{val?.description}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <div className='stack'>
        {displayStack()}
      </div>
      <p className='foot-description'>
        That's my basic stack, but I've used more languages and tools.
        <br />
        Contact me and I can share you my curriculum with more details ✌🏼</p>
    </div>
  )
}