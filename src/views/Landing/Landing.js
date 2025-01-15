import React from 'react'
import { Categories } from '../Categories/Categories'
import iconPaper from '../../assets/images/icon.svg'
import'./Landing.scss'

export const Landing = () => {
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
                <p className='value'>4</p>
                <p className='datum'>companies</p>
              </div>
              <div>
                <p className='value'>6</p>
                <p className='datum'>big projects</p>
              </div>
            </div>
            <div className='data'>
              <div>
                <p className='value'>5</p>
                <p className='datum'>years experience</p>
              </div>
              <div>
                <p className='value'>+150k</p>
                <p className='datum'>users satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </>
  )
}