import React from 'react'
import JotFormReact from 'jotform-react';
import './main.css'

const Form2 = () => {
    return (
        <div className="jotForm">
            <JotFormReact 
            formURL="https://www.jotform.com/212412153827449"
            />
        </div>
    )
}

export default Form2
