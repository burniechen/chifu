import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TopNavBar from './TopNavBar'
const App = () => (
	<Container>
		<Row>
			<Col></Col>

			<Col lg={10} xs={12}>
				<TopNavBar />
			</Col>

			<Col></Col>
		</Row>
	</Container>
);


export default App;
