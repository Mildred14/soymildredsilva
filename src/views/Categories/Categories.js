import React, { useRef, useEffect, useState } from "react";import "./Categories.scss";
import { Card } from '../../components/Card/Card'
import { Modal } from '../../components/Modal/Modal'
import companies from '../../assets/images/companies.png'
import techStack from '../../assets/images/tech-stack.png'
import contact from '../../assets/images/contact.png'
import about from '../../assets/images/about.png'
import reviews from '../../assets/images/reviews.png'
import blogPost from '../../assets/images/blogpost.png'

export const Categories = () => {
  const elementCardsRef = useRef(null)
  const titleRef = useRef(null)
  const [categorySelected, setCategorySelected] = useState('')
  const [modalStatus, setModalStatus] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const rect = elementCardsRef.current.getBoundingClientRect()
      const rectTitle = titleRef.current.getBoundingClientRect()

      const animationClass = 'smooth-categories'
      if (rectTitle.top <= window.innerHeight  && rectTitle.bottom >= 0) {
        titleRef.current.classList.add(animationClass)
      }
      if (rect.top <= window.innerHeight  && rect.bottom >= 0 ) {
        elementCardsRef.current.classList.add(animationClass)
      }
    })
  }, [])

  const topCategories= [
    {
      name: 'Work Experience',
      img: companies,
    },
    {
      name: 'Technology Stack',
      img: techStack,
    },
    {
      name: 'Contact',
      img: contact,
    },
    {
      name: 'Blog Posts',
      modalTitle: 'Latest Blog Posts',
      img: blogPost,
    },
    {
      name: 'About me',
      img: about,
    },
    {
      name: 'Testimonials',
      modalTitle: 'References of my colleagues',
      img: reviews,
    },
  ]
  const showCategories = () => {
    return topCategories.map((category, index) => {
      return (<Card name={category.name} imgIcon={category.img} id={index} selected={setCategorySelected} status={setModalStatus} />)
    })
  }

  return (
    <div className="categories">
      <div className="title">
        <p className="title-text" ref={titleRef}>Cool<br/>Things</p>
      </div>
      <div className="cards" ref={elementCardsRef}>
        <div className="wrap-cards">
          {showCategories()}
        </div>
      </div>
      <div className="overlap" id="categories" />
      {modalStatus && <Modal name={topCategories[categorySelected]?.modalTitle ?? topCategories[categorySelected]?.name} id={categorySelected} selected={setCategorySelected} status={setModalStatus} />}
    </div>
  )
}