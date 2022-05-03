import React from 'react'
import { project } from '../assets/json/projects.json'

// styles
import '../assets/styles/portfolio.css'

function Portfolio() {
  return (
    <>
      <header>
        <div className="logo">PORTFOLIO</div>
        <h1>- welcome to my portfolio, if you want, you <br /> can have one also, and it can look like this.</h1>
        <div className="line"></div>
      </header>
      <section className="portfolio-card">
        <div className="content">
          {
            project.map((project, index) => {
              return(
                <a href={project.link} key={index}>
                  <img src={project.img} alt="" />
                  <div className="project-info">
                    <div className="name-project">
                      <p>{project.name}</p>
                      <div className="line"></div>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Portfolio