import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from 'react'
import Lifecycle_Comp from './Components/Lifecycle_Comp'
import FormControlled from './Components/FormControlled'
import FomControlled_Cach2 from './Components/FomController_Cach2'
import FormUnCotroll from './Components/FormUnCotroller'
import Login from './Components/Login'
import Register from './Components/Register'
import CheckNV from './Components/CheckNV'
import CheckMaNV from './Components/CheckMaNV'
import LoginUI from './Components/LoginUI'

class  App extends Component {
  // Khoi tao constructor
  constructor(props){
    super(props)
    this.state={
      show: false,
      company:"rekkei",
      showForm:false, //state de quyet dinh trang thai cua form
    }
  }
  

  // handleShow=(e)=>{
  //   console.log('even',e);//even mac dinh laa 1 su kien js tao ra khi co su ien tu nguoi dung
  //   this.setState({
  //     show:!this.state.show
  //   })
  // }
  // render(){

  // return (
  //   <>
  //   <button onClick={(e)=>this.handleShow(e)}>Show</button>
  //   <button onClick={()=>this.setState({
  //     company:"dhhdhj"
  //   })}>Change props</button>
  // {/* khu vuc hien thi cac component */}

  // <button onClick={()=>
  // this.setState({
  //   showForm: !this.state.showForm
  // })
  // }>Show Form</button>


  //   {this.state.show ===true ?
  //    <Lifecycle_Comp company={this.state.company}/>
  //   :
  //   <></>
  //   }
  //   {/* hien thi form */}
  //   {
  //     this.state.showForm? <Login/>:<></>
  //   }
  //   </>
  // )
  // }
  render(){
    return(
      <>
      {/* <Login/>
      <Register/> */}
      {/* <CheckNV/> */}
      {/* <CheckMaNV/> */}
      <LoginUI/>
      </>
    )
  }
}

export default App
