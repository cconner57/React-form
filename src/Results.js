import React from 'react';

const Results = ({ data }) => {
	return (
		<div>
			<h1>Info</h1>
			<p>{data.Name}</p>
			<p>{data.Email}</p>
			<p>{data.City}</p>
		</div>
	);
};

export default Results;
