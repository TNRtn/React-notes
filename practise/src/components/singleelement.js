import React,{ Component } from 'react';
class SingleElement extends Component{
	constructor(props){
		super(props)
		this.state={
			username:''
		}
	}
	change=(event)=>{
		//console.log(event.target.value)
		this.setState({
			username:event.target.value
		})
	}
	render(){
		return(
			<form>
			<div>
			<label>username</label>
			<input type='text' value={this.state.username}  onChange={this.change}/>
			</div>
			<div>{this.state.username}</div>
			</form>
			)
	}
}
export default SingleElement;