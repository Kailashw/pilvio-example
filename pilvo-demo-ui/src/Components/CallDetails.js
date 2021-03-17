import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

function CallDetails({ details }) {
    return (
        <MDBCol>
            <MDBCard style={{ width: "40rem" }}>
                <MDBCardBody>
                    <MDBCardTitle>Call Details</MDBCardTitle>
                    <MDBCardText>
                        Hi {details.username}, 
                    </MDBCardText>
                    <MDBCardText>
                        You are now speaking to  {details.to}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default CallDetails
