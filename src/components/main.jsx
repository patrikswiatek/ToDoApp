import React from 'react';
import ToggleButton from "./shared/ToggleButton";
import ToDoList from "./list.jsx";


class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [], text: '',
		};
	}

	onChange = (e) => {
		this.setState({text: e.target.value})
	};

	onSubmit = (e) => {
		let newTask = {
			task: this.state.text,
		};

		this.setState = prevState => ({tasks: prevState.tasks.concat(newTask), text: ''});
		e.preventDefault();
	};









	render() {





			return <section>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary col-md-12">
					<div className='container'>
						<button className="navbar-toggler navbar-toggler-right" type="button"
						        data-toggle="collapse"
						        data-target="#navbarTogglerDemo03"
						        aria-controls="navbarTogglerDemo03" aria-expanded="false"
						        aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"/>
						</button>
						<a className="navbar-brand" href="">ToDoApp</a>

						<ul className="navbar-nav mr-auto mt-2 mt-md-0">
							<li className="nav-item active">
								<a className="nav-link" href="">Home
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="">Done</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="text"
							       placeholder="Search"/>
						</form>

					</div>
				</nav>
				<div className="container">
					<div className='main'>
						<div
							className='mainContainer row align-content-center justify-content-center align-self-center'>
							<div className='back'>
								<form onSubmit={this.onSubmit}
								      className="input-group mb-3 section row justify-content-center col-md-12">
									<input ref={(a) => this._inputElement = a}  type="text"
									       className="form-control col-md-7"
									       placeholder="Enter task"
									       aria-label="Recipient's username"
									       aria-describedby="basic-addon2"/>
									<select className="custom-select col-md-2">
										<option value="">P</option>
										<option value="1">O</option>
										<option value="2">T</option>
										<option value="3">T</option>
									</select>
									<button type='submit' className="btn btn-shadow btn-primary col-md-3">Add task</button>
								</form>
								      <ToDoList list={this.state.tasks} />  
								<div className='row justify-content-center'>
									<table className="table table-hover table-primary col-md-12">
										<thead className="thead-dark">

										</thead>
										<tbody>
										   <tr>
											   <td>

											   </td>
										   </tr>
										</tbody>
									</table>
								</div>
							</div>

						</div>
						<ToggleButton/>
					</div>
				</div>
			</section>;

	}
}

export default Main;