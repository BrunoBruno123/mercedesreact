import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';
import car5 from '../../images/car5.png';
import car8 from '../../images/car8.png';
import car9 from '../../images/car9.png';


const pricing  = () => {
  return (
    <Container>
        <Row>
            <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={car5} />
            <Card.Body>
                <Card.Title>G Class</Card.Title>
                <Card.Text>
                G Class e tipit mercedes-benz eshte nje SUV luksoz me kater rrota terheqese i prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                </Card.Text>
                <Button variant="primary">Buy 150.000 Euro</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={car8} />
            <Card.Body>
                <Card.Title>A Class</Card.Title>
                <Card.Text>
                A Class e tipit mercedes-benz eshte nje makine kompakte me pese dyer e prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                </Card.Text>
                <Button variant="primary">Buy 80.000 Euro</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={car9} />
            <Card.Body>
                <Card.Title>B Class</Card.Title>
                <Card.Text>
                B Class e tipit mercedes-benz eshte nje makine kompakte me pese dyer me nje dizajn monovolumeni te prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                </Card.Text>
                <Button variant="primary">Buy 30.000 Euro</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={car5} />
            <Card.Body>
                <Card.Title>G Class</Card.Title>
                <Card.Text>
                G Class e tipit mercedes-benz eshte nje SUV luksoz me kater rrota terheqese i prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                </Card.Text>
                <Button variant="primary">Buy 150.000 Euro</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={car5} />
            <Card.Body>
                <Card.Title>G Class</Card.Title>
                <Card.Text>
                G Class e tipit mercedes-benz eshte nje SUV luksoz me kater rrota terheqese i prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                </Card.Text>
                <Button variant="primary">Buy 150.000 Euro</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={car8} />
            <Card.Body>
                <Card.Title>A Class</Card.Title>
                <Card.Text>
                A Class e tipit mercedes-benz eshte nje makine kompakte me pese dyer e prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                </Card.Text>
                <Button variant="primary">Buy 80.000 Euro</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={car9} />
            <Card.Body>
                <Card.Title>B Class</Card.Title>
                <Card.Text>
                B Class e tipit mercedes-benz eshte nje makine kompakte me pese dyer me nje dizajn monovolumeni te prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                </Card.Text>
                <Button variant="primary">Buy 30.000 Euro</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={car5} />
            <Card.Body>
                <Card.Title>G Class</Card.Title>
                <Card.Text>
                G Class e tipit mercedes-benz eshte nje SUV luksoz me kater rrota terheqese i prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                </Card.Text>
                <Button variant="primary">Buy 150.000 Euro</Button>
            </Card.Body>
            </Card>
    </Row>
    </Container>
  );
}


export default pricing;