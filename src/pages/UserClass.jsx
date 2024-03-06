import React from "react";
import UserContext from "../utils/UserContext.js";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
    };
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("Parent Mounted");
  }
  render() {
    console.log("parent render called");
    const { name, city } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Hello I am</h1>

        <UserContext.Consumer>
          {(data) => <p>{data.userName}</p>}
        </UserContext.Consumer>

        <h2>Hello I am from {city} </h2>
        <h3>This is Class State : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
export default UserClass;

// Parent Compnent :
//     constructor ....
//     render (){
//       <UserClass name="First" city="New Delhi" />
//       <UserClass name="Second" city="New Delhi" />
//     }

/*
Actual Output : 

Parent Constructor
Parent Render 
First Constructor
First Render
Second Constructor
Second Render
First Component Did Mount
Second Component Did Mount
Parent Component Did Mount

*/
