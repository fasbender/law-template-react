import React from 'react'
import Services from '../components/Services'
import '../components/main.css'

const ServicesView = () => {
    return (
        <div className="card-main">
            <h1>Services</h1>
            <div className="card-list">
                <Services/>
            </div>
        </div>
    )
}

export default ServicesView
