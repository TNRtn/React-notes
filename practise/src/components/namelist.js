import React,{ Component } from 'react'
 function NameList(){
 	const names=['tnr','vijay','bhargav','ahalya','tnr']
 	return(
 		<div>
 		{
 			names.map((x,index)=>
 				<h2 key={index}>{x}</h2>
 			)
 		}
 		</div>
 		)
 }
 export default NameList;