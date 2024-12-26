import React, { Component } from 'react';
class RefsDemo extends Component{
	constructor(props){
		super(props)
		this.inputRef=React.createRef()
		this.cbRef=null
		this.setcbref=(element)=>{
			this.cbref=element
		}
	}
	componentDidMount(){
		if(this.cbref){
			this.cbref.focus()
		}
		//this.inputRef.current.focus()
		//console.log(this.inputRef)
	}
	onclick=()=>{
		alert(this.inputRef.current.value)
	}
	render(){
		return(
			<div>
			<input type="text" placeholder="enter..." ref={this.inputRef}/>
			<input type="text" placeholder="enter..." ref={this.setcbref}/>

			<button onClick={this.onclick}>click</button>
			</div>
			)
	}
}
export default RefsDemo;