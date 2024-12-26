import React,{ Component } from 'react';
class Textarea extends Component{
	constructor(){
		super()
		this.state={
			message:''
		}
	}
	change=(event)=>{
		this.setState({
			message:event.target.value
		})
	}
	render(){
		return(
			<form>
			<div>
			<h1>text area</h1>
			<textarea type="text"
			value={this.state.message}
			onChange={this.change}/>
			</div>
			<div>{this.state.message}</div>
			</form>
			)
	}
}
export default Textarea;