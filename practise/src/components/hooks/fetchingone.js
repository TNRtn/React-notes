import React,{useState,useEffect} from 'react';
import axios from 'axios';
function Fetching(){
	const [post,setPost]=useState([])
	const [id,setId]=useState(1)
	const [idfrombutton,setbutton]=useState(1)
	useEffect(()=>{
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
			(res)=>{
				console.log(res)
				setPost(res.data)
			}).catch((error)=>{
				console.log(error)
			})
	},[idfrombutton])
	const handle=()=>{
		setbutton(id)
	}
	return(
		<div>
		<input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
		<button type="button" onClick={handle}>Fetch</button>
		<h1>{post.title}</h1>
		{/*<ul>
		{
			posts.map(post=><li key={post.id}>{post.id} {post.title}</li>)
		}
	</ul>*/}
		</div>
		)
}
export default Fetching;