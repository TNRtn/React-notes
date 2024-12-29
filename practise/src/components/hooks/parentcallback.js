import React,{useState,useCallback} from 'react'
import Button from './button'
import Count from './count'
import Title from './title'

function ParentCallback(){
	const [age,setage]=useState(25)
	const [salary,setsalary]=useState(50000)
	const incrementage=useCallback(()=>{
		setage(age+1)
	},[age])
	const incrementsalary=useCallback(()=>{
		setsalary(salary+1000)
	},[salary])
	return(
		<div>
		<Title />
		<Count text='age' count={age} />
		<Button handleClick={incrementage}>Incrementage</Button>
		<Count text='salary' count={salary} />
		<Button handleClick={incrementsalary}>Incrementsalary</Button>
		</div>
		)
}
export default ParentCallback;