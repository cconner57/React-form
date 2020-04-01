import React from 'react';

const Form = ({ button, nextStep, name, state, handleChange }) => {
	const handleSubmit = e => {
		e.preventDefault();
		nextStep();
	};

	return (
		<div className='Form-container'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder={name}
					name={name}
					value={state}
					onChange={handleChange}
				/>
				<input type='submit' value={button} />
			</form>
		</div>
	);
};

export default Form;
