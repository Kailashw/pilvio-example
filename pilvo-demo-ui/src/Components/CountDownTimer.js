import React from 'react';
import { MDBContainer, MDBAlert } from 'mdbreact';

/**
 * This function takes time (in seconds) and disconnect function as arguments.
 */
function CountDownTimer({ time, disconnect }) {
    const [counter, setCounter] = React.useState(time);

    React.useEffect(() => {
        //call to disconnect the call
        if (counter === 0) {
            disconnect();
        }
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <MDBContainer>
            <MDBAlert color="danger" >
                This Call will End in : {counter} Seconds
            </MDBAlert>
        </MDBContainer>
    )
}

export default CountDownTimer
