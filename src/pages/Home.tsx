import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const Heading = styled.h1`
	font-size: 3rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

const Paragraph = styled.p`
	font-size: 1.5rem;
	text-align: center;
`;

const Home: React.FC = () => {
	return (
		<Container>
			<Heading>Welcome to the Tasks App</Heading>
			<Paragraph>More content coming soon!</Paragraph>
		</Container>
	);
};

export default Home;
