import React from 'react'

function ShowForm({ formParams, setFormParams, makeCall }) {

    const handleChange = (event) => {
        //check if username and phone number is collected
        setFormParams({
            ...formParams,
            [event.target.name]: event.target.value
        })
        return;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        makeCall(formParams)
    }


    return (
        <div>
            <h1> Enter Details of the call</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Your Name: <input type="text" name="username" value={formParams.username} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone Number to call: <input type="text" name="to" value={formParams.to} onChange={handleChange} placeholder="please input country code too..." />
                </label>
                <br />
                <label>
                    Duration of call: 
                <select name="time" value={formParams.time} onChange={handleChange}>
                    <option value={10}>5 Minutes</option>
                    <option value={600}>10 Minutes</option>
                    <option value={900}>15 Minutes</option>
                </select>
                </label>
                <br />
                <input type="submit" value="Make a call" />
            </form>
        </div>
    )
}

export default ShowForm
