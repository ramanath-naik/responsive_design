import React from "react";
import { useState } from "react";

const withCounter = (OldComponent, incrementBy=1) => {     //incresing count by based on particular parameter. and this can be done passing parameter.

    return function EnhancedComponent(props){
        const [count, setCount] = useState(0);

    return(
        <OldComponent {...props} count={count} incrementCount={()=> setCount(count + incrementBy)} name='withCounter'/>  //props collision. this name prop will overwrite the props coming from withName HOC.
    )
}
}

export default withCounter;