import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
const initialstate={
	loading:true,
	error:"",
	post:{}
}
const reducer=(state,action)=>{
	switch(action.type){
		case 'FETCH_SUCCESS':
		return {
		loading:false,
		post:action.payload,
		error:''
	}
	case 'FETCH_ERROR':
	return {
		loading:false,
		post:{},
		error:"something went wrong"
	}
	default :
	return state
	}
}

function Datafetch(){
	const [state,dispatch]=useReducer(reducer,initialstate)
	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
			(res)=>{
				dispatch({type:'FETCH_SUCCESS',payload:res.data})
			}).catch((error)=>{
				dispatch({type:'FETCH_ERROR'})
			})
	},[])
	return(
		<div>
		{state.loading ? 'loading' :state.post.title}
		{state.error ? state.error : null}
		</div>
		)
}
export default Datafetch;