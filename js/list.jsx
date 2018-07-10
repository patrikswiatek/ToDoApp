import React from 'react';


class List extends React.Component {
	render() {
		let List = props => <ul>
			{props.items.map((item, index) => <li key={index}>{item}</li>)}
		</ul>;
	}
}

export default List;



