import React,{ Component } from 'react';
import ComponentB from './componentb';
import { UserProvider } from './context';
class ComponentA extends Component{
	render(){
		return(
			<UserProvider value="tnr">
			<ComponentB />
			</UserProvider>
		)
	}
}
export default ComponentA;