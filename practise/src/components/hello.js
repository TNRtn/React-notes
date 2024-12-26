import React from 'react';

const Hello = (props) => {
	const {name,collage}=props
  return (
  	<div>
    <h1>Hello {name} {collage}</h1>
    </div>
  )
}


export default Hello;
