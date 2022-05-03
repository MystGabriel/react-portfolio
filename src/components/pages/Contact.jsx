import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { project } from '../json/projects.json'
import Typed from 'typed.js'
import { HashLoader } from 'react-spinners'
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
import '../styles/portfolio.css'
import '../styles/contact.css'

function Contact() {

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
          <header className="header-contact">
            <div className="logo">CONTACT</div>
            <h1>- Don't be Shy, Say Hello!</h1>
            <div className="line"></div>
          </header>
          <section className="contact">
            <div className="content contact-content">
              <div className="container">
                <div className="contact-form bg-form">
                  <div className="title-form">SEND ME A MESSAGE</div>
                  <form action="https://api.staticforms.xyz/submit" method='POST'>
                    <input type="hidden" name='accessKey' value="22543831-93b7-4ffc-9790-9f8ded63e81e"/>
                    <input type="hidden" name="redirectTo" value="/"/>
                    <div className="fields">
                      <div className="field name">
                          <input type="text" placeholder="Name" name="name" required/>
                      </div>
                      <div className="field email">
                          <input type="email" placeholder="Email" name="email" required/>
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
                <div className="contact-info">
                  <div className="infos">
                    <div className="info-title">CONTACT INFOS</div>
                    <div className="user-info">
                      <FiMapPin/>
                      <div className="info">São Paulo, Brasil</div>
                    </div>
                    <div className="user-info">
                      <FiMail/>
                      <div className="info">gabrielsilvaaraujo16@gmail.com</div>
                    </div>
                    <div className="user-info">
                      <FiPhoneCall/>
                      <div className="info">+55 11 96028-1403</div>
                    </div>
                    <div className="user-info">
                      <FiLinkedin/>
                      <div className="info">linkedin.com/in/MystGabriel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
        }
    </>
  )
}

export default Contact