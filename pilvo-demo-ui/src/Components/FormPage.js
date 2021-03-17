import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = ({ formParams, setFormParams, makeCall }) => {

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
    <MDBContainer>
      <br/> <br/> <br/> <br/>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleSubmit}>
            <p className="h4 text-center mb-4">Enter Details of the call</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label>
            <input type="text" name="username" className="form-control" value={formParams.username} onChange={handleChange} />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Phone Number to call:
            </label>
            <input type="text" name="to" className="form-control" value={formParams.to} onChange={handleChange} />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Duration of call:
            </label>
            <select name="time" value={formParams.time} onChange={handleChange}>
              <option value={10}>5 Minutes</option>
              <option value={600}>10 Minutes</option>
              <option value={900}>15 Minutes</option>
            </select>
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Make a call
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;