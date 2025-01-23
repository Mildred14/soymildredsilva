import React from "react";
import plusIcon from '../../assets/images/plus.svg'
import './Card.scss'

export const Card = ({name, imgIcon, id, selected, status}) => {

  const handleClick = () => {
    selected(id)
    status(true)
    const categories = document.getElementById("categories")
    categories.classList.add("overlap-show")
  }

  return (
    <a className={`more-info card card-${id}`} onClick={handleClick} title="more-info" key={id}>
      <div className="img-wrapper">
        <img src={plusIcon} width="30" loading="lazy"/>
      </div>
      <div>
        <img src={imgIcon} className="img-category" loading="lazy"/>
      </div>
      <div className="title">
        <p className="category-title">
          {name}
        </p>
      </div>
    </a>
  )
}