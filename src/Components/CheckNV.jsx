import React, { Component } from "react";

export default class CheckNV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      value:"",
    };
  }
  getValueInputByChange=(e)=>{
    this.setState({
        value:e.target.value
    })
  }


  handleSubmit=(e)=>{
    e.preventDefault()
    if(this.state.value==""){
        alert("Mã nhân viên không được để trống")
        return
    }
    const index = this.state.userCode.findIndex(e=>e == this.state.value)
    if(index!=-1){
        alert("da ton tai")
        return
    }
    this.setState({
        userCode: [...this.state.userCode, this.state.value]
    })
    alert("them thanh cong")
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.getValueInputByChange} />
          <button type="submit">button</button>
        </form>
      </>
    );
  }
}
