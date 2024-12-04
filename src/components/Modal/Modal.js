import React from "react"
import plusIcon from '../../assets/images/plus.svg'
import "./Modal.scss"

export const Modal = ({name, id, selected, status}) => {
  const handleModal = () => {
    const categories = document.getElementById("categories")
    categories.classList.remove("overlap-show")
    status(false)
    selected('')
  }

  return (
    <div className="modal-open" id={`modal-${id}`} title={`modal-${id}`}>
      <div className="modal-header">
        <h2>{name}</h2>
        <a onClick={handleModal}>
          <img src={plusIcon} width="30" />
        </a>
      </div>
    </div>
  )
}