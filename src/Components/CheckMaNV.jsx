import React, { Component } from 'react'

export default class CheckMaNV extends Component {
    constructor(props){
        super(props)
        this.state={
            arr:[],
            value:"",
            waning: "",
        }
    }
    handeOnchange=(e)=>{
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.value==""){
            this.setState({
                waning: "ma nhan vien khong duoc bo trong",
                value: ""
            })
            return
        }
        const value = this.state.value.split("")
        if (value[0] != "N" && value[1]!="V"){
            this.setState({
                waning: "sai dinh dang!",
                value: ""
            })
            return
        }
        if (value.length < 8){
            this.setState({
                waning: "phai du 8 ki tu!",
                value: ""
            })
            return
        }
        if (value.length > 16){
            this.setState({
                waning: "ngan hon 16 ki tu!",
                value: ""
            })
            return
        }
        this.setState({
            arr:[...this.state.arr, this.state.value],
        })
        this.setState({
            waning: "Them thanh cong!",
            value: ""
        })
    }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.value} type="text" name="" id="" 
            onChange={this.handeOnchange}
            />
            <p style={{color: "red"}}>{this.state.waning}</p>
            <button type='submit'>button</button>
        </form>

      </>
    )
  }
}
