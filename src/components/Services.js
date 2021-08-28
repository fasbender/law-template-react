import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPhone, faTable, faSearch } from '@fortawesome/free-solid-svg-icons'
import FormModal from '../Screens/FormModal'
import './main.css'

const Services = () => {

    const [showModal, setShowModal] = useState(false)

    const openModel = () => setShowModal(!showModal)

    return (
        <>
        <div className="card">
            <FontAwesomeIcon icon={faComments} size="3x"/>
            <h1>Chat</h1>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faPhone} size="3x"/>
            <h1>Contact</h1>
        </div>
        <div className="card" onClick={openModel}>
            <FontAwesomeIcon icon={faTable} size="3x"/>
            <h1>Report</h1>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faSearch} size="3x"/>
            <h1>Investigation</h1>
        </div>
        <FormModal showModal={showModal} setShowModal={setShowModal}/>
        </>
    )
}

export default Services
