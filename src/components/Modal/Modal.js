import React from "react"
import plusIcon from '../../assets/images/plus.svg'
import { WorkExperience } from "../WorkExperience/WorkExperience"
import { TechnologyStack } from "../TechnologyStack/TechnologyStack"
import { Contact } from "../Contact/Contact"
import { AboutMe } from "../AboutMe/AboutMe"
import "./Modal.scss"

export const Modal = ({name, id, selected, status}) => {
  const handleModal = () => {
    const categories = document.getElementById("categories")
    categories.classList.remove("overlap-show")
    status(false)
    selected('')
  }
  const modalContent = () => {
    switch(id) {
      case 0: return(<WorkExperience />);
      case 1: return(<TechnologyStack />);
      case 2: return(<Contact />);
      case 3: return(<h1>Curious</h1>);
      case 4: return(<AboutMe />);
      case 5: return(<h1>5</h1>);
      default:
        return null
    }
  }

  return (
    <div className="modal-open" id={`modal-${id}`} title={`modal-${id}`}>
      <div className="modal-header">
        <h2>{name}</h2>
        <a onClick={handleModal}>
          <img src={plusIcon} width="30" />
        </a>
      </div>
      {modalContent()}
    </div>
  )
}