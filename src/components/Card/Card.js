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
    <div className={`card card-${id}`} key={id}>
      <a className="more-info" onClick={handleClick} title="more-info">
        <img src={plusIcon} width="30"/>
      </a>
      <div>
        <img src={imgIcon} className="img-category" />
      </div>
      <div className="title">
        <p className="category-title">
          {name}
        </p>
      </div>
    </div>
  )
}