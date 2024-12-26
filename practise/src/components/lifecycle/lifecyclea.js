import React,{ Component } from 'react';
class LifeCycleMount extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'tnr'
		}
		console.log("A")
	}
	static getDerivedStateFromProps(props,state){
		console.log("B")
		return null
	}
	componentDidMount(){
		console.log("D componentDidMount")
	}
	render(){
		console.log("C")
		return(
			<div>
			tnr</div>
			)
	}
}
export default LifeCycleMount;