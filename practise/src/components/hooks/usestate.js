import React,{useState} from 'react';
function Usestate(){
	const [count,setCount]=useState(0)
	const increment=()=>setCount(count+1)
	const decrement=()=>setCount(count-1)
	return(
		<div>
		<button onClick={increment}>increment</button>
		<h1>{count}</h1>
		<button onClick={decrement}>decrement</button>
		</div>
		)
}
export default Usestate;