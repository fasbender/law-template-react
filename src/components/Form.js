import React from 'react'

const Form = () => {
    return (
        <>
            <form>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label for="report">Report</label>
                <textarea/>
            
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}

export default Form
