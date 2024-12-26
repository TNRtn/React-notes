import React,{ Component } from 'react';

class EventBind extends Component{
	constructor(props){
		super(props)
		this.state={
			message:"hello"
		}
	}
	click=()=>{
		this.setState({
			message:"goodbye"
		})
	}
	render(){
		return(
			<div>
			<h1>{this.state.message}</h1>
			<button onClick={this.click}>click</button>
			</div>
			)
	}
}
export default EventBind;