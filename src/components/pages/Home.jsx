import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { project } from '../json/projects.json'
import Typed from 'typed.js'
import Aos from 'aos'
import 'aos/dist/aos.css'

// icons
import { FiLinkedin, FiGithub, FiUser, FiMapPin, FiMail, FiPhoneCall } from 'react-icons/fi'
import { AiOutlineWhatsApp, AiOutlineCheckCircle } from 'react-icons/ai'
import { RiArrowDropRightLine } from 'react-icons/ri'

// images
import Development from '../images/Development.png'
import WebDesign from '../images/WebDesign.png'
import Studies from '../images/Studies.png'

// styles
import '../styles/home.css'

function Home() {
  // typing effect
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["WEB DESIGNER", "DEVELOPER", "FREELANCER"],
      typeSpeed: 70,
      backSpeed: 60,
      backDelay: 2000,
      showCursor: false,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  // animation on scroll
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      {/* HOME */}
      <section className="home" id="home">
        <div className="content">
          <div className="home-content">
            <h1 className="title">HELLO</h1>
            <h2 className="subtitle">I AM <span ref={el}></span></h2>
            <div className="home-btn">
              <button className="see-more"><Link to="/">HIRE ME</Link></button>
              <button className="download"><Link to="/" download="Gabriel Silva Araujo CV">DOWNLOAD CV</Link></button>
            </div>
          </div>
        </div>
        <div className="box">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="content">
          <div className="left">
            <h1 className="title">ABOUT ME</h1>
            <p className="function">I'M A UX/UI DESIGNER & <br/> FRONT END DEVELOPER</p>
            <div className="line"></div>
          </div>
          <div className="right">
            <p className="text">I worked for 2 years at the City Hall of São Paulo in the IT area doing maintenance on hardware and assisting in other activities in the sector. I have been working on extracurricular projects such as: websites, software, UX/UI designs and Fullstack developments.</p>
            <p className="text">If you want to follow the evolution and execution of my projects, access my GitHub link below: https://github.com/MystGabriel</p>
            <p className="text">This site was made by me using good programming practices, if you want quality work like this, don't hesitate to get in touch.</p>
            <div className="social">
              <div className="title">FOLLOW ME</div>
              <div className="social-icons">
                <a href="https://linkedin.com/in/MystGabriel"><FiLinkedin/></a>
                <a href="https://linkedin.com/in/MystGabriel"><FiGithub/></a>
                <a href="https://linkedin.com/in/MystGabriel"><AiOutlineWhatsApp/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE */}
      <section className="knowledge" id="knowlodge">
        <div className="content">
          <div className="cards">
            <div className="card" data-aos="fade-up" data-aos-duration="1000">
              <div className="img-card">
                <img src={Development} alt="" />
              </div>
              <div className="title">DEVELOPMENT</div>
              <p>Software development such as: Mobile app, OOP, algorithms, etc.</p>
              <button><Link to="/"><RiArrowDropRightLine/></Link></button>
            </div>
            <div className="card principal" data-aos="fade-up" data-aos-duration="1500">
              <div className="img-card">
                <img src={WebDesign} alt="" />
              </div>
              <div className="title">WEB DESIGN</div>
              <p>Web Designs and templates, all clean and organized</p>
              <button><Link to="/"><RiArrowDropRightLine/></Link></button>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000">
              <div className="img-card">
                <img src={Studies} alt="" />
              </div>
              <div className="title">STUDIES</div>
              <p>All my studies and projects at your fingertips</p>
              <button><Link to="/"><RiArrowDropRightLine/></Link></button>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section className="resume" id="resume">
        <div className="content">
          <div className="title">MY RESUME</div>
          <div className="resume-container">
            <div className="project">
              <div className="project-title">UX DESIGN</div>
              <div className="project-date">2021 - present</div>
            </div>
            <div className="project-info">
              <p>Drawing canvases is one of my favorite hobbies nowadays, to study I use many examples from other professionals and apply them to my projects.</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="resume-container">
            <div className="project">
              <div className="project-title">WEB DESIGNER</div>
              <div className="project-date">2019</div>
            </div>
            <div className="project-info">
              <p>I became interested in the front end and practiced as much as possible to reach a high level of quality.</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="resume-container">
            <div className="project">
              <div className="project-title">FACULTY OF COMPUTER SCIENCE</div>
              <div className="project-date">2018</div>
            </div>
            <div className="project-info">
              <p>I entered the College of Computer Science, and there I learned basic programming concepts and good practices.</p>
            </div>
          </div>
          <Link to="/"><button>LET'S WORK TOGETHER</button></Link>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="project" id="project">
        <div className="content">
          <div className="cards">
            {
              project.map((project, index) => {
                return(
                  <div className="card" key={index} data-aos="fade-up" data-aos-duration="1000">
                    <img src={project.img} alt="" />
                    <h1 className="title">{project.name}</h1>
                    <p className="category">{project.category}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <div className="content">
          <div className="title">MY SKILLS</div>
          <div className="cards">
            <div className="card">
              <div className="title-skill">
                <AiOutlineCheckCircle/>
                <h1>WEB DESIGN</h1>
              </div>
              <div className="info">Practicing the art of creating websites with creative and eye-catching designs.</div>
            </div>
            <div className="card">
              <div className="title-skill">
                <AiOutlineCheckCircle/>
                <h1>VALID HTML CODE</h1>
              </div>
              <div className="info">Tags used in the most modern way, where all browsers can use.</div>
            </div>
            <div className="card">
              <div className="title-skill">
                <AiOutlineCheckCircle/>
                <h1>UX/UI</h1>
              </div>
              <div className="info">Good designs for interface and user experience to make your navigation better.</div>
            </div>
            <div className="card">
              <div className="title-skill">
                <AiOutlineCheckCircle/>
                <h1>MODERN LAYOUTS</h1>
              </div>
              <div className="info">Current references of professional layouts.</div>
            </div>
            <div className="card">
              <div className="title-skill">
                <AiOutlineCheckCircle/>
                <h1>CLEAN CODE</h1>
              </div>
              <div className="info">Comprehensive code and with great programming practices. Easy code reading.</div>
            </div>
            <div className="card">
              <div className="title-skill">
                <AiOutlineCheckCircle/>
                <h1>FIGMA DESIGN</h1>
              </div>
              <div className="info">Great knowledge with the tool, all designs are done on it.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="maps" id="maps">
        <div className="content">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.375203449354!2d-46.58906798449713!3d-23.62673046989587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c989cf11ccb%3A0xa2619cb6a3aa1866!2sAv.%20Patente%2C%20500%20-%20Jardim%20Patente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004243-000!5e0!3m2!1spt-BR!2sbr!4v1651590295672!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="content">
          <div className="title">GET IN TOUCH</div>
          <div className="text">Are You Ready to Work with Me? Don't be Shy, Say Hello!</div>
          <div className="line"></div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-container">
                <FiUser/>
                <div className="infos">
                  <div className="title-info">Name</div>
                  <div className="info">Gabriel Silva Araujo</div>
                </div>
              </div>
              <div className="contact-container">
                <FiMapPin/>
                <div className="infos">
                  <div className="title-info">Address</div>
                  <div className="info">São Paulo, Brasil</div>
                </div>
              </div>
              <div className="contact-container">
                <FiMail/>
                <div className="infos">
                  <div className="title-info">Email</div>
                  <div className="info">gabrielsilvaaraujo16@gmail.com</div>
                </div>
              </div>
              <div className="contact-container">
                <FiPhoneCall/>
                <div className="infos">
                  <div className="title-info">Phone</div>
                  <div className="info">+55 11 96028-1403</div>
                </div>
              </div>
              <div className="contact-container">
                <FiLinkedin/>
                <div className="infos">
                  <div className="title-info">Linkedin</div>
                  <div className="info">linkedin.com/in/MystGabriel</div>
                </div>
              </div>
              <div className="contact-container">
                <FiGithub/>
                <div className="infos">
                  <div className="title-info">Github</div>
                  <div className="info">github.com/MystGabriel</div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="title-form">SEND ME A MESSAGE</div>
              <form action="https://api.staticforms.xyz/submit" method="POST">
                <input type="hidden" name="accessKey" value="22543831-93b7-4ffc-9790-9f8ded63e81e" />
                <input type="hidden" name="redirectTo" value="https://portfolio-final-version-kohl.vercel.app/contact.html" />
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" name="name" required/>
                  </div>
                  <div className="field email">
                    <input type="text" placeholder="Email" name="email" required/>
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" name="subject" required/>
                </div>
                <div className="field textarea">
                  <textarea placeholder="Describe your interest..." name="message" required></textarea>
                </div>
                <div className="button">
                  <button type="submit" name="Submit">SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home