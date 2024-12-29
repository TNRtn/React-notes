import React from 'react';
function Title(){
	console.log("title rendering")
	return(
		<h2>
		use callback hook
		</h2>
		)
}
export default React.memo(Title);