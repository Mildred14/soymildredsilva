import React from "react"
import plusIcon from '../../assets/images/plus.svg'
import "./Modal.scss"

export const Modal = ({name, id}) => {
  const handleModal = () => {
    const modal = document.getElementById(`modal-${id}`)
    const categories = document.getElementById("categories")
    categories.classList.remove("overlap-show")
    modal.classList.remove("modal-open")
  }

  return (
    <div class="modal" id={`modal-${id}`}>
      <div class="modal-header">
        <h2>{name}</h2>
        <a onClick={handleModal}>
          <img src={plusIcon} width="30" />
        </a>
      </div>
    </div>
  )
}