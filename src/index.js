import React from 'react';
import ReactDOM from 'react-dom';


function List(props) {
	const items = props.items;
	const listItems = items.map((item, index) => 
		<li key={index}>
			{item}
		</li>
	);
	return(
		<ul>
			{listItems}
		</ul>
	);
}


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			items: []
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			term: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		if(this.state.term !== ''){
			this.setState({
				term: '',
				items: [...this.state.items, this.state.term]
			});
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="text" value={this.state.term} onChange={this.onChange} />
					<input type="submit" value="Submit" />
				</form>
				<List items={this.state.items} />
			</div>
		);
	}
}


ReactDOM.render (
	<App />,
	document.getElementById('root')
);

