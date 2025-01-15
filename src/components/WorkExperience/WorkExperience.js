import React from "react";
import './WorkExperience.scss'
import salesloftLogo from '../../assets/images/salesloft.png'
import roverpassLogo from '../../assets/images/roverpass.png'
import micheladaLogo from '../../assets/images/michelada.jpeg'

export const WorkExperience = () => {
  const experiences = [
    { name: "Salesloft",
      period: "2024-2021",
      img: salesloftLogo,
      description: "A workflow platform for seller teams to drive more revenue, make forecasts, and close deals with buyers",
      jobTitle: 'Software Engineer',
      link: 'https://www.salesloft.com/'
    },
    { name: "Roverpass",
      period: "2021-2019",
      img: roverpassLogo,
      description: "Web application to make reservations for camprounds RV located in US",
      jobTitle: 'Jr. Software Engineer',
      link: 'https://www.roverpass.com/'
    },
    { name: "michelada.io",
      period: "2019-2018",
      img: micheladaLogo,
      description: "Software development consultant",
      jobTitle: 'Apprentice',
      link: 'https://www.michelada.io/'
    },
  ]

  const displayExperience = () => {
    return experiences.map((experience) => {
      return (
        <a href={experience.link} target="_blank" rel="noopener" className="item--card">
            <div className="item--img">
              <img src={experience?.img}/>
            </div>
            <div className="content">
              <p className="period">{experience.period}</p>
              <p className="name">{experience.name}</p>
              <p className="job-title">{experience.jobTitle}</p>
              <p className="description">{experience.description}</p>
            </div>
        </a>
      )
    })
  }

  return (
    <div className="items">
      {displayExperience()}
      <h2 className="github">No worries, there's more in <a href="https://github.com/Mildred14" target="_blank" rel="noopener" className="github-link">GitHub</a></h2>
    </div>
  )
}