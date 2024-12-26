import React,{ Component } from 'react'
function ChildComponent(props){
	return(
		<div>
		<button onClick={()=>props.greet}>greet parent</button>
		</div>
		)
}
export default ChildComponent;