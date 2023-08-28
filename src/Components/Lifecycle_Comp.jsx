import React, { Component } from 'react'

export default class Lifecycle_Comp extends Component {
    //khoi tao contructor
    constructor(props){
        super(props)
        console.log('components duoc khoi tao');
        this.state={
            className:"JV230630",
        };
    }

    componentWillMount(){
        console.log("component will mount");
    }

    componentDidMount(){
        console.log('component did mount');
    }

    componentWillReceiveProps(newProps){
        console.log("showdddd",newProps);
    }

    shouldComponentUpdate(){
        console.log('componen will update dc chay');
        return true
    }

    componentDidUpdate(){
        console.log('component did update duoc goi ');
    }

    componentWillUnmount(){
        console.log('componen will unmount');//thuong duoc su dung de clear su kien
    }
  render() {
    console.log('component duoc render');
    return (
      <>ten con ty: {this.props.company} 
      <h3>Ten lop:{this.state.className}</h3>
      <button onClick={()=>this.setState({
        className:"HN/JA-230630"
      })} >Chang State</button>
      </>
    )
  }
}
