import React from 'react';


class ToDoList extends React.Component {

	render() {

		const createTasks = (task, index) => {
			return <li key={index}>{task}</li>
		};

		let todoEntries = this.props.list;
		let listItems = todoEntries.map(createTasks);

		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
}

export default ToDoList;




