import React from 'react'

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
        <div>
            This Call will End in : {counter} Seconds
        </div>
    )
}

export default CountDownTimer
