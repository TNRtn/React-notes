import React,{ Component } from 'react';
import ComponentC from './componentc';
import { UserConsumer } from './context';
class ComponentB extends Component{
	render(){
		return(
			<UserConsumer>
			{
				(username)=>{
					<div>hello,{username}</div>
				}
			}
			</UserConsumer>
		)
	}
}
export default ComponentB;