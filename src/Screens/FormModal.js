import React from 'react'
import Form from '../components/Form'
import Form2 from '../components/Form2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../components/main.css'

const FormModal = ({showModal, setShowModal}) => {

    const dimBackground = () => document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'
    const defaultBackground = () => document.body.style.background = 'initial'

    showModal ? dimBackground() : defaultBackground()

    return (
        <>
        <div className={`${showModal ? 'form activeForm' : 'form'}`}>
            <div className="formClosed">
                <FontAwesomeIcon icon={faTimes} onClick={() => setShowModal(false)} className="formTimes"/>
                <Form2/>
            </div>
        </div>
        </>
    )
}

export default FormModal
