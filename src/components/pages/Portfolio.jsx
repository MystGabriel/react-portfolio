import React, { useEffect, useState } from 'react'
import { project } from '../json/projects.json'
import { HashLoader } from 'react-spinners'

// styles
import '../styles/portfolio.css'

function Portfolio() {

  // loading
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 3500)
  }, [])

  return (
    <>
      {loading 
        ?
        <div className="loader">
          <div className="loader">
            <HashLoader 
            size={30}
            color={"#F4B942"}
            loading={loading}
          /></div>
        </div> 
        :
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
        }
    </>
  )
}

export default Portfolio