import React from 'react'
import paperAirplane from '../../assets/images/paper-airplane.svg'
import iconPaper from '../../assets/images/icon.svg'
import'./Landing.scss'

export const Landing = () => {
  return (
    <div class='landing-page'>
      <div class="header">
        <img src={iconPaper} />
        <p class="header__secondary-font">Mildred <br/> Silva</p>
      </div>
      <div class="landing-page__content">
        <div class='lading-page__text'>
          <h2>Transforming ideas</h2>
          <h2>into great apps!</h2>
          <h2 class='secondary-font'>Code 100% made in Mexico</h2>
        </div>
        <div class="lading-page__paper-ariplane">
          <img src={paperAirplane} class="paper-ariplane"/>
        </div>
      </div>
    </div>
  )
}