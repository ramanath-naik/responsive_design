import React from 'react'

const ReactMemoName = ({name}) => {
    console.log("This is Name component");
  return (
    <h1>Name is: {name}</h1>
  )
}

export default React.memo(ReactMemoName);