import React, { Component } from 'react'
export default class TestClass extends Component {
    constructor(props){
        super(props)
        console.log("child constructor called")
    }
    componentDidMount(){
        console.log("Child Mounted")
    }
   
  render() {
    console.log("child render called")
    return (
      <div>TestClass</div>
    )
  }
}













