import React from 'react';
import PropTypes from 'prop-types'

toDoTask = (props) => {
	const text = (<div>{props.tasks.map(task => <td>{task.text}</td>)})}</div>);

	const textsList = props.tasks.map(task => <th key={task.id} scope="row">{task.id}</th>);

		return (
			<tr>
				{textsList}
				{text}
				<td/>
				<td/>
			</tr>);
	};

toDoTask.proTotypes = {
	task: PropTypes.string
};

export default toDoTask;





