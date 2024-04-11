// import { useState } from "react";

// const HoverCounter = () => {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <button onMouseOver={()=> setCount(count+1)}>Hover me</button>
//             <h2>Count is: {count}</h2>

//         </div>
//     )
// }

// export default HoverCounter;


import withCounter from "./withCounter";

const HoverCounter = (props) => {
    const {count, incrementCount} = props;
    return (
        <div>
            <button onMouseOver={incrementCount}>Hover me</button>
            <h2>Count is: {count}</h2>

        </div>
    )
}

export default withCounter(HoverCounter, 5);  //here we need to pass argument