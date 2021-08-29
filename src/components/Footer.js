import React from 'react'
import './contactform.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo-div">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="cyberaid"/>
            </div>
            <div className="contact">
                <div>
                    <p>Dhaka Office: 326 West Palashbagh, Rampura, 1219, Dhaka</p>
                    <p>Chittagong Office: Baitul Aman Market,934 O R Nizam Road, Chittagong,Bangladesh</p>
                    <p>Singapore Office: 160 Robinson Road, #14-04 Singapore Business Federation Centre</p>
                    <p>Corporate Number: +8801500768</p>
                </div>
                <div class="container">
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}}/>

                    <input type="submit" value="Submit" className="submit"/>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Footer
