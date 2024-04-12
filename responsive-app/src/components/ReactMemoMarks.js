import React from 'react';
import { useMemo } from 'react';

const ReactMemoMarks = ({marks, subject}) => {
    console.log("This is marks component");
    const percentageMarks = useMemo(()=>{           //using useMemo hook
        console.log("Inside useMemo hook");
        return (marks*100)/100;
    },[marks])
  return (
    <>
    <h1>Marks is : {marks}</h1>
    <h1>Percentage is : {percentageMarks}%</h1>
    <h1>Subject is : {subject}</h1>
    </>

  )
}

export default React.memo(ReactMemoMarks);  // using React memo