import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
	background: #94e4fe;
	border-radius: 50px;
	box-shadow: 20px 20px 60px #7ec2d8, -20px -20px 60px #aaffff;
	margin: 10px auto;
	max-width: 200px;
	padding: 25px;
	text-align: center;

	h1 {
		text-decoration: underline;
	}

	p {
		text-align: left;
	}
`;

const Results = ({ data }) => {
	return (
		<Profile>
			<h1>Information</h1>
			<p>Name: {data.Name}</p>
			<p>Email: {data.Email}</p>
			<p>City: {data.City}</p>
		</Profile>
	);
};

export default Results;
