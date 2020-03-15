import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TopNavBar from './TopNavBar';
import ImageOverlay from './ImageOverlay';
import CardSection from './CardSection';

const App = () => (
	<Container>
		<Row className='bg-primary'>
			<Col>
				<TopNavBar />
			</Col>
		</Row>
		
		<Row className='bg-secondary'>
			<Col>
				<ImageOverlay />
			</Col>
		</Row>
		
		<Row className='d-flex justify-content-around bg-dark'>
			<CardSection />
		</Row>
	</Container>
);

export default App;
