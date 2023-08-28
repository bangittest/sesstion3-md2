import React, { Component } from "react";

export default class LoginUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usercode: "",
      email: "",
      password: "",
    };
  }
  handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
  
    console.log(value);
    console.log(name);
    this.setState({
      [name]: value,
    });
    
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.usercode === "") {
      alert("Mã không được để trống");
      return;
    }
    const usercode = this.state.usercode.split("");
    if (usercode[0] != "N" && usercode[1] != "V") {
      alert("Mã không đúng định dạng");
      return;
    }
    if (usercode.length < 8) {
      alert("Mã không được nhỏ hơn 8 ký tự");
      return;
    }
    if (usercode.length > 16) {
      alert("Mã không được lớn hơn 18 ký tự");
      return;
    }
    if (this.state.email === "") {
      alert("Email không được để trông");
      return;
    }
    const isValidEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    };
    if (!isValidEmail(this.state.email)) {
      alert(" Email không đúng định dạng");
      return;
    }
    if (this.state.password === "") {
      alert("pass word không được bỏ trống");
      return;
    }
    const validatePassword = (pass) => {
      return String(pass)
        .toLowerCase()
        .match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/);
    };
    if (!validatePassword(this.state.password)) {
      alert("“Mật khẩu không được nhỏ hơn 8 ký tự");
      return;
    }

    const newUser = {
      usercode: this.state.usercode,
      email: this.state.email,
      password: this.state.password,
    };
    alert("đăng kí thành công");
    console.log(newUser);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Code
            </label>
            <input
              value={this.state.value}
              type="text"
              className="form-control"
              id="exampleInput"
              aria-describedby="emailHelp"
              name="usercode"
              placeholder="Enter Code"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              placeholder="Enter email"
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
              placeholder="Password"
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
