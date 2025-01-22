import React from "react"
import Quotes from '../../assets/images/quotes.svg'
import data from './testimonials.json'
import naomi from '../../assets/images/naomi.jpeg'
import wade from '../../assets/images/wade.jpeg'
import david from '../../assets/images/david.jpeg'
import cesar from '../../assets/images/cesar.jpeg'
import mieko from '../../assets/images/mieko.jpeg'
import './Testimonials.scss'

export const Testimonials = () => {
  const images = {
    "naomi": naomi,
    "wade": wade,
    "david": david,
    "cesar": cesar,
    "mieko": mieko
  }
  const handleRead = (e, testimonial, shortText) => {
    if (e.target.innerHTML === 'Read more') {
      e.target.innerHTML = 'Read less'
      e.target.previousSibling.innerHTML = testimonial
      e.target.parentElement.classList.add("scroll")
    }
    else {
      e.target.innerHTML = 'Read more'
      e.target.previousSibling.innerHTML = shortText
      e.target.parentElement.classList.remove("scroll")
    }
  }

  const displayRecommendations = () => {
    return data.colleagues.map((colleague, index) => {
      const { testimonial } = colleague
      const splitTestimonial = testimonial.split(' ')
      const shortText = splitTestimonial.slice(0, 45).join(' ') + "..."

      return (
        <div className="testimonial-wrap" key={index}>
          <img src={Quotes} alt="quote-icon" className="quotes"/>
          <div className="text">
            <p className="testimonial" data-testid={`testimonial-${index}`}>{shortText}</p>
            <button className="cta-read" onClick={(e) => handleRead(e, testimonial, shortText)} data-testid={`btn-${index}`}>Read more</button>
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