import React from "react";
import plusIcon from '../../assets/images/plus.svg'
import './Card.scss'

export const Card = ({name, imgIcon, id}) => {
  const handleClick = () => {
    const modal = document.getElementById(`modal-${id}`)
    const categories = document.getElementById("categories")

    categories.classList.add("overlap-show")
    modal.classList.add("modal-open")
  }

  return (
    <div class={`card card-${id}`} key={id}>
      <a class="more-info" onClick={handleClick}>
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