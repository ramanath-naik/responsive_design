import React from 'react';

const Button = ({incrementCount}) => {
    console.log("Inside button count");
    return(
        <button onClick={incrementCount}>Click me</button>
    )
}

export default React.memo(Button);