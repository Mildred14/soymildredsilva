import React from "react"
import Quotes from '../../assets/images/quotes.svg'
import YMLData from './recommendation.yml'
import './Testimonials.scss'

export const Testimonials = () => {
  const colleagues = [
    {
      name: "Naomi Pohl",
      jobPosition: "Senior Software Engineer",
      recommendation: YMLData.recommendation.naomi
    },
    {
      name: "Wade Hundley",
      jobPosition: "Senior Engineering Manager",
      recommendation: YMLData.recommendation.wade
    },
    {
      name: "David Colin",
      jobPosition: "Engineering Manager",
      recommendation: YMLData.recommendation.david
    },
    {
      name: "Cesar Sanabria",
      jobPosition: "Director of Engineering & Site Lead",
      recommendation: YMLData.recommendation.cesar
    },
    {
      name: "Mieko Watanabe",
      jobPosition: "Engineer Support",
      recommendation: YMLData.recommendation.mieko
    },
  ]

  const displayRecommendations = () => {
    return colleagues.map((colleague) => {
      return (
        <div className="testimonials">
          <img src={Quotes} className="quotes"/>
          <p>texto...</p>
          <div className="info-colleague">
            <img />
            <div>
              <p>{colleague.name}</p>
              <p>{colleague.jobPosition}</p>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      {displayRecommendations()}
    </div>
  )
}