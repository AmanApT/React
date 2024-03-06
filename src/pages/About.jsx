import React, { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";


const About = () => {
  useEffect(()=>{
// console.log("Heelu");
  },[])
  return (
    <div>
      <h1>About Section</h1>
      {/* <User name="Aman" city="New Delhi" /> */}
      <UserClass name="Aman" city="New Delhi" />
     
    </div>
  );
};

export default About;


