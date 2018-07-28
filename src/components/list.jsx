import React from 'react';
import PropTypes from 'prop-types'

class List extends React.Component {

	render() {
		const list = this.props.tasks.map(task => <td key={task.id}>{task}</td>);
		return {list}
	}
}
List.propTypes = {
	tasks: PropTypes.string
};


class ToDoList extends React.Component {
	render() {
		return (
			<tr>
			<th scope="row">i</th>
			<List />
			<td/>
			<td/>
		</tr>);
	}
}

export default ToDoList;





