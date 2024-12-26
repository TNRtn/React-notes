import React, {Component} from 'react';
class Select extends Component{
	constructor(){
		super()
		this.state={
			selected:'React'
		}
	}
	change=(event)=>{
		this.setState({
			selected:event.target.value
		})
	}
	render(){
		return(
			<div>
			<select
			value={this.state.selected}
			onChange={this.change}
			>
			<option>React</option>
			<option>Vue</option>
			<option>java</option>
			</select>
			<p>selected:{this.state.selected}</p>
			</div>
			)
	}
}
export default Select;