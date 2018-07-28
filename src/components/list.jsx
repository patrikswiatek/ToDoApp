import React from 'react';

const ToDoList = props => (
	<ul>
		{
			props.tasks.map((task, index) => <li key={index}>{task}</li>)
		}
	</ul>
);

export default ToDoList;





