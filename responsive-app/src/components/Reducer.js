import { useReducer } from "react";
import React from "react";

const initialState=0;

const reducer = (state, action) =>{
    switch(action){
        case "Increment" :
            return state+1
        case "Decrement" :
            return state-1
        default :
            return state
    }

}

function Reducer() {
   const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=> dispatch("Increment")}>Increment</button>
            <button onClick={()=> dispatch("Decrement")}>Decrement</button>
        </div>
    )
}

export default Reducer;