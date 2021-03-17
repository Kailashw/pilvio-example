import './App.css';
import { useState } from "react";
import CountDownTimer from './Components/CountDownTimer';
import CallDetails from './Components/CallDetails';
import FormPage from './Components/FormPage';

const axios = require('axios');

const BASE_API_URL = 'http://localhost:8080'

function App() {
  // from number is hard coded as it needs to be registered and verified with pilvo for outbound calls.
  const initialState = {
    from: '+919164456505',
    to: "",
    username: "",
    time: 300
  }

  const [formView, setFormView] = useState(true);
  const [formParams, setFormParams] = useState(initialState);

  const disconnect = () => {
    setFormView(true);
    setFormParams(initialState)
    // an api to disconnect the on going call !! 
  }

  const makeCall = async (data) => {
    axios({
      url: `${BASE_API_URL}/api/makecall`, 
      method : 'POST',
      headers: { 'content-type': 'application/json' },
      mode: 'no-cors',
      data : data
    })
      .then(response => {
        console.log(response);
        setFormView(false);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <div className="container">
      
      {
        formView && <FormPage formParams={formParams} setFormParams={setFormParams} makeCall={makeCall} />
      }
      {
        !formView &&
        (
          <div>
            <br/> <br/> <br/> <br/>
            <CallDetails details={formParams} />
            <br/> <br/>
            <CountDownTimer time={formParams.time} disconnect={disconnect} />
          </div>
        )
      }
    </div>
  );
}

export default App;
