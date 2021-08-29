import React, { useState } from 'react'
import FormModal from '../Screens/FormModal'
import './main.css'

const Services = () => {

    const [showModal, setShowModal] = useState(false)

    const openModel = () => setShowModal(!showModal)

    return (
        <>
        <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/contact.jpg'} alt="contact"/>
        </div>
        <div className="card" onClick={openModel}>
            <img src={process.env.PUBLIC_URL + '/images/investigate.jpg'} alt="investigation"/>
        </div>
        <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/report.jpg'} alt="report" onClick={openModel}/>
        </div>
        <FormModal showModal={showModal} setShowModal={setShowModal}/>
        </>
    )
}

export default Services
