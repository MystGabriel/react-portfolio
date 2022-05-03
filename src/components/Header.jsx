import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// icons
import { MdMenu, MdClose } from 'react-icons/md'

// styles
import '../assets/styles/header.css'

function Header() {

    const [navbar, setNavbar] = useState(false)
    const [sticky, setSticky] = useState("")

    window.onscroll = () => {
        scrollY > 20 ? setSticky("sticky") : setSticky("")
    }

    function changeLang(option){
        localStorage.setItem('lang', option.target.value)
        window.location.reload()
    }

    const lang = localStorage.getItem('lang') || 'en'

    return (
    // NAVBAR
    <nav className={navbar ? "navbar show" : `navbar ${sticky}`}>
        <div className="content">
            <div className="logo">
                <Link to="/">Gabriel</Link>
            </div>
            <div className="menu-list">
                <div className="icon cancel-btn" onClick={() => setNavbar(!navbar)}>
                    <MdClose/>
                </div>
                <li><NavLink exact="true" activeclassname="navbar-active" to="/">HOME</NavLink></li>
                <li><NavLink exact="true" activeclassname="navbar-active" to="/portfolio">PORTFOLIO</NavLink></li>
                <li><NavLink exact="true" activeclassname="navbar-active" to="/contact">CONTACT</NavLink></li>
                <li>
                    <select className="custom-select" onChange={changeLang} value={lang}>
                        <option value="en">English</option>
                        <option value="br">Português</option>
                    </select>
                </li>
            </div>
            <div className={navbar ? "icon menu-btn hide" : "icon menu-btn"} onClick={() => setNavbar(!navbar)}>
                <MdMenu/>
            </div>
        </div>
    </nav>
    )
}

export default Header