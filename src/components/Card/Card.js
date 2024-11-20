import React from "react";
import plusIcon from '../../assets/images/plus.svg'
import './Card.scss'

export const Card = ({name, imgIcon, id}) => {
  return (
    <div class={`card card-${id}`} key={id}>
      <a class="more-info">
        <img src={plusIcon} width="30"/>
      </a>
      <div>
        <img src={imgIcon} class="img-category" />
      </div>
      <div class="title">
        <p class="category-title">
          {name}
        </p>
      </div>
    </div>
  )
}