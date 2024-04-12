import React from 'react'

const ReactMemoMarks = ({marks}) => {
    console.log("This is marks component");
  return (
    <h1>Marks is : {marks}</h1>
  )
}

export default React.memo(ReactMemoMarks);  // using React memo