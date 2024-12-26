import React, { Component} from 'react';
class UserGreet extends Component{
	constructor(props){
		super(props)
		this.state={
			isloggedin:true
		}
	}
	render(){
		return (this.state.isloggedin && <div>welcome tnr</div>)
	}
}
export default UserGreet;