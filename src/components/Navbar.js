/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './main.css'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const enableScroll = () => document.body.style.overflow = "initial"
    const disableScroll = () => document.body.style.overflow = "hidden"

    const handleToggle = () => setToggle(!toggle)
    
    toggle ? disableScroll() : enableScroll()

    return (
        <header className="header" id="navbar">
            <a href="" className="logo" onClick={() => setToggle(false)}>RedDot</a>

            <nav className="nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="#fieldofwork">AboutUS</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">ContactUS</a></li>
                </ul>
            </nav>
            <button className="btn">Let's Connect</button>
            <div className="socials">
                <FontAwesomeIcon icon={faFacebookF} size="2x" className="social fb"/>
                <FontAwesomeIcon icon={faInstagram} size="2x" className="social ig"/>
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="social li"/>
                <FontAwesomeIcon icon={faTwitter} size="2x" className="social tw"/>
            </div>
            <div className="toggle" onClick={handleToggle}>
                <FontAwesomeIcon icon={toggle ? faTimes : faBars} size="2x"/>
            </div>
            <div className={`${toggle ? 'nav-dropdown active' : 'nav-dropdown'}`}>
                <ul>
                    <li onClick={() => setToggle(false)}><a href="">Home</a></li>
                    <li onClick={() => setToggle(false)}><a href="#fieldofwork">AboutUS</a></li>
                    <li onClick={() => setToggle(false)}><a href="">Blog</a></li>
                    <li onClick={() => setToggle(false)}><a href="">ContactUS</a></li>
                    <button className="btn-dropdown">Let's Connect</button>
                    <div className="links">
                        <FontAwesomeIcon icon={faFacebookF} size="2x" className="social fb"/>
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="social ig"/>
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="social li"/>
                        <FontAwesomeIcon icon={faTwitter} size="2x" className="social tw"/>
                    </div>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
