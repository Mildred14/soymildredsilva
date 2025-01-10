import React, { useRef, useEffect, useState } from "react";import "./Categories.scss";
import { Card } from '../../components/Card/Card'
import { Modal } from '../../components/Modal/Modal'
import companies from '../../assets/images/companies.svg'
import techStack from '../../assets/images/tech-stack.svg'
import contact from '../../assets/images/contact.svg'
import about from '../../assets/images/about.svg'
import reviews from '../../assets/images/reviews.svg'
import blogPost from '../../assets/images/blogpost.svg'

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
      img: blogPost,
    },
    {
      name: 'About me',
      img: about,
    },
    {
      name: 'Testimonials',
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
      {modalStatus && <Modal name={topCategories[categorySelected]?.name} id={categorySelected} selected={setCategorySelected} status={setModalStatus} />}
    </div>
  )
}