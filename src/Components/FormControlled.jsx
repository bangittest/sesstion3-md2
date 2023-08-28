import React, { Component } from "react";

export default class FormControlled extends Component {
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
              value={this.state.userName}
              onChange={(e) => {
                this.setState({ userName: e.target.value });
              }}
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
              value={this.state.dateOfBirth}
              onChange={(e) => {
                this.setState({ dateOfBirth: e.target.value });
              }}
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
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
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
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
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
