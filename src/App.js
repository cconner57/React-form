import React, { useState } from 'react';
import Form from './Form';
import Results from './Results';

function App() {
	const [state, setState] = useState({
		data: 1,
		Name: '',
		Email: '',
		City: ''
	});

	const nextStep = () => {
		setState({
			...state,
			data: state.data + 1
		});
	};

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	switch (state.data) {
		case 1:
			return (
				<div className='App-container'>
					<Form
						button='Next'
						nextStep={nextStep}
						name='Name'
						state={state.name}
						handleChange={handleChange}
					/>
				</div>
			);
		case 2:
			return (
				<div className='App-container'>
					<Form
						button='Next'
						nextStep={nextStep}
						name='Email'
						state={state.email}
						handleChange={handleChange}
					/>
				</div>
			);
		case 3:
			return (
				<div className='App-container'>
					<Form
						button='Submit'
						nextStep={nextStep}
						name='City'
						state={state.city}
						handleChange={handleChange}
					/>
				</div>
			);
		case 4:
			return (
				<div className='App-container'>
					<Results data={state} />
				</div>
			);
		default:
			return 'Error';
	}
}

export default App;
