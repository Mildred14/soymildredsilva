import React from 'react'
import { Button } from '../../components/Button/Button'
import { Categories } from '../Categories/Categories'
import paperAirplane from '../../assets/images/paper-airplane.svg'
import iconPaper from '../../assets/images/icon.svg'
import'./Landing.scss'

export const Landing = () => {
  return (
    <>
      <div className='landing-page'>
        <div className="header">
          <img src={iconPaper} />
          <p className="header__secondary-font">Mildred <br/> Silva</p>
        </div>
        <div className="landing-page__content">
          <div className='lading-page__text'>
            <h2>Transforming ideas</h2>
            <h2>into great apps!</h2>
            <h2 className='secondary-font'>Code 100% made in Mexico</h2>
            <Button />
          </div>
          <div className="lading-page__paper-ariplane">
            <img src={paperAirplane} className="paper-ariplane"/>
          </div>
        </div>
      </div>
      <Categories />
    </>
  )
}