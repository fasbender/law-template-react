import React from 'react'
import Form from '../components/Form'
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
            <div className="formClosed" onClick={() => setShowModal(false)}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
            <Form/>
        </div>
        </>
    )
}

export default FormModal
