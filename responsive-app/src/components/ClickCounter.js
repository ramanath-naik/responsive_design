// import { useState } from "react";

// const ClickCounter = () => {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <button onClick={()=> setCount(count+1)}>Click me</button>
//             <h2>Count is: {count}</h2>

//         </div>
//     )
// }

// export default ClickCounter;


import withCounter from "./withCounter";

const ClickCounter = (props) => {
    const {count, incrementCount} = props;
    return (
        <div>
            <button onClick={incrementCount}>Click me</button>
            <h2>Count is: {count}</h2>

        </div>
    )
}

export default withCounter(ClickCounter, 10);  //here we need to pass argument