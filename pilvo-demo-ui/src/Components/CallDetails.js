import React from 'react'

function CallDetails({details}) {
    return (
        <div>
            <h1>Hi {details.username}, </h1>
            <h2> You are now speaking to  {details.to}  </h2>
        </div>
    )
}

export default CallDetails
