import React, { Component } from "react";

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:"",
            password:""
        }
    }
    handleOnchange=(e)=>{
        const value=e.target.value
        const name=e.target.name
        console.log(value);
        console.log(name);
        this.setState({
            [name]:value
        })
    }


    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.userName.length < 3 || this.state.password.length < 6){
            alert("khoong du ki tu")
            return
        }
        const newUser={
            userName:this.state.userName,
            password:this.state.password
        }
        console.log(newUser);
    }
  render() {
    return (
      <>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              UserName:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="userName"
              aria-describedby="emailHelp"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              onChange={this.handleOnchange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}
