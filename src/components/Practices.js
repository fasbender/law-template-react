import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel, faHome, faUser, faWallet, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './main.css'

const Practices = () => {
    return (
        <div className="best-practices" id="fieldofwork">
            <h1 className="best">Best Practices</h1>
            <div className="practices">
                <div className="business-corporate practice">
                    <div>
                        <FontAwesomeIcon icon={faGavel} size="2x"/>
                        <h2>Business & Corporate Law</h2>
                    </div>
                    <p>While corporate law focuses on legal aspects governing sale and distribution of goods, business law covers legal aspects used in acquisitions, mergers, formation of companies and rights of shareholders.</p>
                </div>
                <div className="business-corporate practice">
                    <div>
                        <FontAwesomeIcon icon={faHome} size="2x"/>
                        <h2>Real Estate Law</h2>
                    </div>
                    <p>Laws governing Real estate is the modern term for land and anything that is permanently affixed to it. Fixtures include buildings, fences, and things attached to buildings, such as plumbing, heating, and light fixtures.</p>
                </div>
                <div className="business-corporate practice">
                    <div>
                        <FontAwesomeIcon icon={faUser} size="2x"/>
                        <h2>Intellectual Property Law</h2>
                    </div>
                    <p>Laws governing the creations of the mind, such as inventions; literary and artistic works; designs; and symbols, names and images used in commerce.</p>
                </div>
                <div className="business-corporate practice">
                    <div>
                        <FontAwesomeIcon icon={faWallet} size="2x"/>
                        <h2>VAT & TAX Law</h2>
                    </div>
                    <p>Dealing with the rules under which a public authority has a claim on taxpayers, the rights of taxpayers over their own money and the dealings between public authorities and taxpayers.</p>
                </div>
                <div className="business-corporate practice">
                    <div>
                        <FontAwesomeIcon icon={faPhone} size="2x"/>
                        <h2>Telecommunication Law</h2>
                    </div>
                    <p>It covers law which deals with the operation and execution of radio, satellite, broadcasting and media.</p>
                </div>
                <div className="business-corporate practice">
                    <div>
                        <FontAwesomeIcon icon={faGlobe} size="2x"/>
                        <h2>International Law</h2>
                    </div>
                    <p>Deals with rules governing relations between states and studies how far international law has evolved over the past decades, which in turn helps us form business relations across borders.</p>
                </div>
            </div>
        </div>
    )
}

export default Practices
