import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import './../main.scss';


document.addEventListener('DOMContentLoaded', function () {


	class App extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				term: '',
				items: []
			};
		}

		onChange = (event) => {
			this.setState({ term: event.target.value });
		};

		onSubmit = (event) => {
			event.preventDefault();
			this.setState({
				term: '',
				items: [...this.state.items, this.state.term]
			});
		};

		render() {
			return (
				<div>
					<form className="App" onSubmit={this.onSubmit}>
						<input value={this.state.term} onChange={this.onChange} />
						<button>Submit</button>
					</form>
					<List items={this.state.items} />
				</div>
			);
		}
	}
	ReactDOM.render(<App/>, document.getElementById('app'));
});



