import React from 'react';
import ReactDom from 'react-dom';
const PortalDemo=()=>{
	return ReactDom.createPortal(<h1>srm</h1>,
		document.getElementById('tnr'))
}
export default PortalDemo;