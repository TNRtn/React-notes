import React,{ Component } from 'react';
import Regular from './regular';
import Pure from './pure';
import Memo from '../memo/memo';
class Parent extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'tnr'
		}
	}
	componentDidMount(){
		setInterval(()=>{
			this.setState({
				name:'tnr'
			})
		},2000)
	}
	render(){
		console.log("parent")
		return(
			<div>
			<h1>parent</h1>
			<Memo name={this.state.name}/>
			{/*<Regular name={this.state.name}/>*/}
			{/*<Pure name={this.state.name}/>*/}
			</div>
			)
	}
}
export default Parent;