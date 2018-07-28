import React from 'react';

class ToogleOn extends React.Component {
	render () {
		return (
			<div>
				<button className='toogle-button' onClick={this.props.onClick} />
				<a>Light On</a>
			</div>
		)
	}
}

class ToogleOff extends React.Component {
	render() {
		return (
			<div>
				<button className='toogle-button' onClick={this.props.onClick} />
				<a>Light Off</a>
			</div>
		)
	}
}

class ToogleButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			toogleOn: false,
		}
	}

	handleToogleOff = () => {
		this.setState ({
			toogleOn: false,
		})
	};

	handleToogleOn = () => {
		this.setState ({
			toogleOn: true,
		})
	};

	onToogleClick = (e) => {
		e.preventDefault();

		this.setState ({
			toogleon: !this.state.toogleOn,
		})
	};

	render() {

		let toogle;
		if (this.state.toogleOn) {
			toogle = <ToogleOn onClick={this.handleToogleOff}/>
		}
		else {
			toogle = <ToogleOff onClick={this.handleToogleOn}/>
		}



		return (
			<div>
				{toogle}
			</div>
		)
	};
}

export default ToogleButton;