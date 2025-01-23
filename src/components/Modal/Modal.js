import React from "react"
import plusIcon from '../../assets/images/plus.svg'
import { WorkExperience } from "../WorkExperience/WorkExperience"
import { TechnologyStack } from "../TechnologyStack/TechnologyStack"
import { Contact } from "../Contact/Contact"
import { AboutMe } from "../AboutMe/AboutMe"
import { BlogPosts } from "../BlogPosts/BlogPosts"
import { Testimonials } from "../Testimonials/Testimonials"
import "./Modal.scss"

export const Modal = ({name, id, selected, status}) => {
  const handleModal = () => {
    const body = document.body.classList.remove('no-scroll')
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
      case 3: return(<BlogPosts />);
      case 4: return(<AboutMe />);
      case 5: return(<Testimonials />);
      default:
        return null
    }
  }

  return (
    <div className="modal-open" id={`modal-${id}`}>
      <div className="modal-header">
        <h2>{name}</h2>
        <a onClick={handleModal}>
          <img src={plusIcon} width="30" className="cross-mark"/>
        </a>
      </div>
      {modalContent()}
    </div>
  )
}