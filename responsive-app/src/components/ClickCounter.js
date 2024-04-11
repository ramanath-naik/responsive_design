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
import withName from "./withName";

const ClickCounter = (props) => {
    const {count, incrementCount, name} = props;
    return (
        <div>
            <button onClick={incrementCount}>Click me</button>
            <h2>Count is: {count}</h2>
            <h2>Name: {name}</h2>

        </div>
    )
}

export default withName(withCounter(ClickCounter, 10));  //multiple hoc wrapping