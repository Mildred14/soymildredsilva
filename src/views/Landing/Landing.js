import React from 'react'
import iconPaper from '../../assets/images/icon.svg'
import'./Landing.scss'
import { useCounter } from './useCounter'

export const Landing = () => {
  const companieCounter = useCounter(4, 200)
  const projectsCounter = useCounter(6, 350)
  const yearsExperienceCounter = useCounter(5, 300)
  const usersCounter = useCounter(150000, 20)

  return (
    <>
      <div className='landing-page'>
        <div className="header">
          <img src={iconPaper} />
          <p className="header__secondary-font">MILDRED <br/> SILVA</p>
        </div>
        <div className="landing-page__content">
          <div className='lading-page__text'>
            <h2 className='emoji'>👩🏽‍💻</h2>
            <h2>Transforming ideas</h2>
            <h2>into great apps!</h2>
            <h2 className='secondary-font'>CODE 100% MADE IN MEXICO</h2>
          </div>
          <div className='wrap-data'>
            <div className='data'>
              <div>
                <p className='value'>{companieCounter}</p>
                <p className='datum'>companies</p>
              </div>
              <div>
                <p className='value'>{projectsCounter}</p>
                <p className='datum'>big projects</p>
              </div>
            </div>
            <div className='data'>
              <div>
                <p className='value'>{yearsExperienceCounter}</p>
                <p className='datum'>years experience</p>
              </div>
              <div>
                <p className='value'>+{usersCounter}K</p>
                <p className='datum'>users satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}