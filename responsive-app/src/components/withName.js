import React from "react";

const withName = (OldComponent) => {  

    return function EnhancedComponent(props){

    return(
        <OldComponent {...props} name='withName'/>
    )
}
}

export default withName;