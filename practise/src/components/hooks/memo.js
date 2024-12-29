import React,{useState,useMemo} from 'react'

function Memo(){
	const [countone,setcountone]=useState(0)
	const [counttwo,setcounttwo]=useState(0)
	const incrementone=()=>{
		setcountone(countone+1)
	}
	const incrementtwo=()=>{
		setcounttwo(counttwo+1)
	}
	const isEven=useMemo(()=>{
		let i=0
		while(i!=10000000){
			i+=1
		}
		return countone%2==0
	},[countone])
	return(
		<div>
		<h1>{countone}</h1>
		<button onClick={incrementone}>incrementone</button>
		<span>{isEven ? 'even' :'odd'}</span>
		<h2>{counttwo}</h2>
		<button onClick={incrementtwo}>incrementtwo</button>
		</div>
		)
}
export default React.memo(Memo);