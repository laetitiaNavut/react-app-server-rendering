import React from 'react'; 
import { render } from 'react-dom'; 
import ContactApp from './app/components/ContactApp'; 

let initialData = document.getElementById('initial-data').textContent; 

if (initialData.length>0){ 
	initialData = JSON.parse(initialData); 
} 

render(
	<ContactApp initialData={initialData} />, 
	document.getElementById('root')
);