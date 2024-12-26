import React,{Component} from 'react';
import ChildComponent from './childcomponent'
class ParentComponet extends Component{
	constructor(props){
		super(props)
		this.state={
			parentname:'parent'
		}
		this.greetparent=this.greetparent.bind(this)
	}
	greetparent(){
		alert(`welcom ${this.state.parentname}`)
	}
	render(){
		return(
			<div>
			<ChildComponent greet={this.greetparent}/>
			</div>
			)
	}

}
export default ParentComponet;