import React from 'react';

class TodoItems extends React.Component {

	render() {

		const createTasks = item => {
			return <li key={item.key}>{item.text}</li>
		};

		let todoEntries = this.props.entries;
		let listItems = todoEntries.map(createTasks);

		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
}

export default TodoItems;