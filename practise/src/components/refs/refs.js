import React, { Component } from 'react';
class Refs extends Component{
	constructor(props){
		super(props)
		this.inputRef=React.createRef()

	}
	componentDidMount(){
		this.inputRef.current.focus()
		console.log(this.inputRef)
	}
	onclick=()=>{
		alert(this.inputRef.current.value)
	}
	render(){
		return(
			<div>
			<input type="text" placeholder="enter..." ref={this.inputRef}/>
			<button onClick={this.onclick}>click</button>
			</div>
			)
	}
}
export default Refs;