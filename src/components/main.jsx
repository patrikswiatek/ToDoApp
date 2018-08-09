import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import logo from './../media/todo.png'

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: []};
	}

	handleAdd = () => {
		const newItems = this.state.items.concat([
			prompt('Enter some text')
		]);
		this.setState({items: newItems});
	};

	handleRemove = (i) => {
		let newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({items: newItems});
	};

	render() {
		const items = this.state.items.map(item => (
			<div className='task alert alert-primary' role="alert" key={item}>
				<div className='item'>{item}</div>
				<button className="btn btn-primary btn-delete" onClick={this.handleRemove}>Remove</button>


			</div>
		));


		return (
			<section className='row'>
				<div className='image'><img alt='sss' src={logo} /></div>
				<div className='page'>
				<button className='btn btn-block btn-primary btn-add' onClick={this.handleAdd}>Add task</button>
				<CSSTransitionGroup
					transitionName="fade"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>

						{items}

				</CSSTransitionGroup>
				</div>
			</section>
		);
	}
}

export default Main;

