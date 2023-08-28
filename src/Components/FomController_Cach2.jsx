import React, { Component } from "react";

export default class FomControlled_Cach2 extends Component {
  constructor(props) {
    super(props);
    //khai bao state
    //state quan ly trang thai trong 1 component
    this.state = {
      userName: "",
      dateOfBirth: "",
      email: "",
      password: "",
    };
  }
  //ham lang nghe su thay doi trong cac o input on change
  handleChange=(e)=>{
    const value=e.target.value
    const name=e.target.name
    console.log(value);
    console.log(name);

    this.setState({
        [name]:value
    })
    // if(name==="userName"){
    //     this.setState({
    //         userName:value,
    //     })
    // }else if(name==="dateOfBirth"){
    //     this.setState({
    //        dateOfBirth:value,
    //     })
    // }else if(name==="email"){
    //     this.setState({
    //         email:value,
    //     })
    // }else{
    //     this.setState({
    //         password:value,
    //     })
    // }
  }

  //cap nhat lai state
 

  //ham xu ly gui du lieu
  handleSubmit = (e) => {
    //ngan chan su kien submit form
    e.preventDefault();
    //doi tuong newUser
    const newUser = {
      userName: this.state.userName,
      dateOfBirth: this.state.dateOfBirth,
      email: this.state.email,
      password: this.state.password,
    };
    console.log("new user", newUser);
  };
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              className="form-control"
              id="username"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
