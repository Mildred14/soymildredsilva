import React, { useState } from "react"
import Quotes from '../../assets/images/quotes.svg'
import data from './recommendation.json'
import './Testimonials.scss'
import naomi from '../../assets/images/naomi.jpeg'
import wade from '../../assets/images/wade.jpeg'
import david from '../../assets/images/david.jpeg'
import cesar from '../../assets/images/cesar.jpeg'
import mieko from '../../assets/images/mieko.jpeg'

export const Testimonials = () => {
  const images = {
    "naomi": naomi,
    "wade": wade,
    "david": david,
    "cesar": cesar,
    "mieko": mieko
  }
  const handleRead = (e) => {
    e.preventDefault()
    if (e.target.innerText === 'Read more') {
      e.target.innerText = 'Read less'
      console.log(e.target.previousSibling.innerText)
    }
    else {
      e.target.innerText = 'Read more'

    }
  }

  const displayRecommendations = () => {
    return data.colleagues.map((colleague, index) => {
      const { testimonial } = colleague
      const splitTestimonial = testimonial.split(' ')
      const shortText = splitTestimonial.slice(0, 45).join(' ') + "\u2026"

      return (
        <div className="testimonial-wrap" key={index}>
          <img src={Quotes} alt="quote-icon" className="quotes"/>
          <div className="text">
            <p className="testimonial" id={`testimonial-${index}`}>{shortText}</p>
            <button className="cta-read" onClick={handleRead} id={`btn-${index}`}>Read more</button>
          </div>
          <div className="colleague-wrap">
            <img src={images[colleague.imgName]} className="images"/>
            <div>
              <p className="name">{colleague.name}</p>
              <p className="position">{colleague.jobPosition}</p>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="testimonials">
      {displayRecommendations()}
    </div>
  )
}