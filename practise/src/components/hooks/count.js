import React from 'react';
function Count({text,count}){
	console.log(`${text} rendering`)
	return(
		<div>{text}-{count}</div>
		)
}
export default Count;