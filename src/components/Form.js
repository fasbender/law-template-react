import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import { nanoid } from 'nanoid'
const Form = () => {

    const [data, setData] = useState({
        fullname: "",
        number: "",
        crime: "",
        report: "",
    });
    const [loadData, setLoadData] = useState(false);

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
            setLoadData(true)
            const response = await fetch('https://v1.nocodeapi.com/reddot/google_sheets/hRDrZjFMqmgZXVZO?tabId=Sheet1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[nanoid(), fullname, number, crime, report, new Date().toLocaleString()]])
            })
            await response.json()
            setData({...data, fullname:'', number:'', crime:'', report:''})
        } catch (error) {
            console.log(error)
        }
        setLoadData(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Full Name</label>
                <input type="text" id="fname" name="fullname" value={fullname} onChange={handleChange} placeholder="Your name.."/>

                <label htmlFor="number">Phone Number</label>
                <input type="text" id="number" name="number" value={number} onChange={handleChange} placeholder="Your number.."/>

                <label htmlFor="crime">Type of Crime</label>
                <input type="text" id="crime" name="crime" value={crime} onChange={handleChange} placeholder="Crime.."/>

                <label htmlFor="report">Report</label>
                <textarea placeholder="Describe the crime..." value={report} onChange={handleChange} name="report"/>
            
                {loadData ? 
                <div style={{textAlign: 'center'}}><Loader type="Circles" color="#00BFFF" height={40} width={40}/></div> 
                :
                <input type="submit" value="Submit Report" disabled={fullname==="" || number==="" || crime==="" || report===""}/>}
            </form>
        </>
    )
}

export default Form
