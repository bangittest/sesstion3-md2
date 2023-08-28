import React, { Component } from "react";

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:"",
            password:"",
            confirm:"",
            email:"",
        }
    }
    handleOnChange=(e)=>{
        const value=e.target.value
        const name=e.target.name
        this.setState({
            [name]:value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.userName.length<3){
            alert("khong du ki tu ")
            return
        }else if(this.state.password.length<6){
            alert("khong du 6 ki tu")
            return
        } else if(this.state.confirm!==this.state.password){
            alert("khong trung hop")
            return
        }else if(this.state.email===/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/){
            alert("khong dung dinh dang")
            return
        }
        const newUser={
            userName:this.state.userName,
            password:this.state.password,
            confirm:this.state.confirm,
            email:this.state.email
        }
        console.log("new user", newUser);
    }
  render() {
    return (
      <>
        <form onSubmit={(e)=>{this.handleSubmit(e)}}> 
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="userName" 
              onChange={this.handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password" 
              onChange={this.handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Confirm Password
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="confirm" 
              onChange={this.handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email" 
              onChange={this.handleOnChange}
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

