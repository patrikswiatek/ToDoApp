import React from 'react';
import ToogleButton from "./shared/ToogleButton";
import ToDoList from "./list.jsx";


class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '', tasks: [],
		};
	}

	handleChange = e => {
		this.setState({
			text: e.target.value
		})
	};

	handleClick = e => {
		e.preventDefault();
		this.setState({
			text: '', tasks: [...this.state.text, this.state.tasks]
		});
	};

	render() {
		return (<section>
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
							<div
								className="input-group mb-3 section row justify-content-center col-md-12">
								<input type="text" value={this.state.text}
								       onChange={this.handleChange}
								       className="form-control col-md-7"
								       placeholder="Enter task" aria-label="Recipient's username"
								       aria-describedby="basic-addon2"/>
								<select className="custom-select col-md-2">
									<option select="">P</option>
									<option value="1">O</option>
									<option value="2">T</option>
									<option value="3">T</option>
								</select>
								<a href="" onClick={this.handleClick}
								   className="btn btn-shadow btn-primary col-md-3">Add task</a>
							</div>
							<div className='row justify-content-center'>
								<table className="table table-hover table-primary col-md-12">
									<thead className="thead-dark">
									<tr>
										<th>#</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Username</th>
									</tr>
									</thead>
									<ToDoList tasks={this.state.tasks}/>
								</table>
							</div>
						</div>

					</div>
					<ToogleButton/>
				</div>
			</div>
		</section>);
	}
}

export default Main;