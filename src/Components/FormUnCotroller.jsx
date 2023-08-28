import React, { Component } from "react";

export default class FormUnCotroller extends Component {
  constructor(props) {
    super(props);
    this.userName = React.createRef();
    this.dateOfBirth = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    //khai bao state
  }

  //cap nhat lai state

  //ham xu ly gui du lieu
  handleSubmit = (e) => {
    //ngan chan su kien submit form
    e.preventDefault();
    //doi tuong newUser
    const newUser = {
      userName: this.userName,
      dateOfBirth: this.dateOfBirth,
      email: this.email,
      password: this.password,
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
              ref={this.userName}
              className="form-control"
              id="username"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              ref={this.dateOfBirth}
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              ref={this.email}
              type="text"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              ref={this.password}
              type="password"
              className="form-control"
              id="password"
              name="password"
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
