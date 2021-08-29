import React, { useState } from 'react'

const Form = () => {

    const [data, setData] = useState({
        fullname: "",
        number: "",
        crime: "",
        report: "",
    });

    const { fullname, number, crime, report } = data

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await fetch('https://v1.nocodeapi.com/reddot/google_sheets/hRDrZjFMqmgZXVZO?tabId=Sheet1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[fullname, number, crime, report, new Date().toLocaleString]])
            })
            await response.json()
            setData({...data, fullname:'', number:'', crime:'', report:''})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="fname">Full Name</label>
                <input type="text" id="fname" name="fullname" value={fullname} onChange={handleChange} placeholder="Your name.."/>

                <label for="number">Phone Number</label>
                <input type="text" id="number" name="number" value={number} onChange={handleChange} placeholder="Your number.."/>

                <label for="crime">Type of Crime</label>
                <input type="text" id="crime" name="crime" value={crime} onChange={handleChange} placeholder="Crime.."/>

                <label for="report">Report</label>
                <textarea placeholder="Describe the crime..." value={report} onChange={handleChange} name="report"/>
            
                <input type="submit" value="Submit Report" />
            </form>
        </>
    )
}

export default Form
