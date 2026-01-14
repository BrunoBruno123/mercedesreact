import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';
import car5 from '../../images/car5.png';
import car8 from '../../images/car8.png';
import car9 from '../../images/car9.png';
import ListGroup from 'react-bootstrap/ListGroup';

const pricing = () => {
  return (
    <Container>
		<Row className="d-flex justify-content-around mt-4 mb-4">
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={car5} style={{ width: '100%', padding: '10px' }} />
			  <Card.Body>
				<Card.Title>G Class</Card.Title>
				<Card.Text>
				  G Class e tipit mercedes-benz eshte nje SUV luksoz me kater rrota terheqese i prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
				</Card.Text>
			  </Card.Body>
			  <ListGroup className="list-group-flush">
				<ListGroup.Item>Motorri 6.3</ListGroup.Item>
				<ListGroup.Item>Viti prodhimit 2020</ListGroup.Item>
				<ListGroup.Item>Cmimi 150.000$</ListGroup.Item>
			  </ListGroup>
			   <Card.Body>
                <div className="d-flex justify-content-center">
				<Button variant="primary">Order</Button>
                </div>
			  </Card.Body>
			</Card>
			
			
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={car8} style={{ width: '100%', padding: '10px' }} />
			  <Card.Body>
				<Card.Title>A Class</Card.Title>
				<Card.Text>
				  A Class e tipit mercedes-benz eshte nje makine kompakte me pese dyer e prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
				</Card.Text>
			  </Card.Body>
			  <ListGroup className="list-group-flush">
				<ListGroup.Item>Motorri 2.0</ListGroup.Item>
				<ListGroup.Item>Viti prodhimit 2020</ListGroup.Item>
				<ListGroup.Item>Cmimi 80.000$</ListGroup.Item>
			  </ListGroup>
			  <Card.Body>
                <div className="d-flex justify-content-center">
				<Button variant="primary">Order</Button>
                </div>
			  </Card.Body>
			</Card>
			
			
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={car9}  style={{ width: '100%', padding: '10px' }}/>
			  <Card.Body>
				<Card.Title>B Class</Card.Title>
				<Card.Text>
				  B Class e tipit mercedes-benz eshte nje makine kompakte me pese dyer me nje dizajn monovolumeni te prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
				</Card.Text>
			  </Card.Body>
			  <ListGroup className="list-group-flush">
				<ListGroup.Item>Motorri 2.0</ListGroup.Item>
				<ListGroup.Item>Viti prodhimit 2020</ListGroup.Item>
				<ListGroup.Item>Cmimi 30.000$</ListGroup.Item>
			  </ListGroup>
			  <Card.Body>
                <div className="d-flex justify-content-center">
				<Button variant="primary">Order</Button>
                </div>
			  </Card.Body>
			</Card>
		</Row>
    </Container>	
  );
}

export default pricing;