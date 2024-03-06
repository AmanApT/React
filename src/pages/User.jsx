import React, { useState } from 'react'

const User = ({name,city}) => {

    const [user] = useState(0)

    const userStyle = {
        background: "aquawhite",
        border: "1px solid black"
    }

  return (
    <div style={userStyle}>
        <h1>Hello I am {name} </h1>
        <h2>Hello I am from {city} </h2>
        <h3>This is functional state : {user}</h3>
       
    </div>
  )
}

export default User