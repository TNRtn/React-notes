import React, {Component} from 'react';
import FRInput from './forwardrefs';
class FRInputParent extends Component{
	constructor(props){
		super(props)
		this.inputRef=React.createRef()

	}
	change=()=>{
		this.inputRef.current.focus()
	}
	render(){
		return(
			<div>
			<FRInput ref={this.inputRef}/>
			<button onClick={this.chnage}>focus</button>
			</div>
			)
	}
}
export default FRInputParent;