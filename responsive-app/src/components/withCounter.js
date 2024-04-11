import React from "react";
import { useState } from "react";

const withCounter = (OldComponent, incrementBy=1) => {     //incresing count by based on particular parameter. and this can be done passing parameter.

    return function EnhancedComponent(props){
        const [count, setCount] = useState(0);

    return(
        <OldComponent {...props} count={count} incrementCount={()=> setCount(count + incrementBy)}/>
    )
}
}

export default withCounter;