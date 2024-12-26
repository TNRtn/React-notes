import React, { Component } from 'react';
class Form extends Component{
	constructor(){
		super()
		this.state={
			username:'',
			password:''
		}
	}
	change=(event)=>{
		const {name,value}=event.target
		this.setState({ [name] : value})
	}
	submit=(event)=>{
		event.preventDefault()
		if (this.state.username=="tnr"){
		alert(`username :${this.state.username} password:${this.state.password}`)
	}else{
		alert(`invalid login`)
	}
	}
	render(){
		return(
			<form onSubmit={this.submit}>
			<div>
			<h1>login form</h1>
			<input type="text" placeholder="username"
			name="username" 
			value={this.state.username}
			onChange={this.change}/><br />
			<input type="text" placeholder="password" 
			name="password"
			value={this.state.password}
			onChange={this.change}/>
			</div>
			<button type="submit">submit</button>
			</form>
			)
	}
}
export default Form;