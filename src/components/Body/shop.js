import car5 from '../../images/car5.png';
import car8 from '../../images/car8.png';
import car9 from '../../images/car9.png';
import { Container } from "react-bootstrap";
import { Row, Col, Button } from 'react-bootstrap';

const bodyz = () => {
    return (
        <Container>
           <Row>
                <Col xs={12} md={4} lg={4}>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={car5} alt="G Class" className="rounded-circle w-50"/>
                    </div>
                    <h2 className="text-center">
                        G Class
                    </h2> 
                    <p>
                        G Class e tipit mercedes-benz eshte nje SUV luksoz me kater rrota terheqese i prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary" href='/pricing'>Order</Button>
                    </div> 
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={car8} alt="B Class" className="rounded-circle w-50"/>
                    </div>
                    <h2 className="text-center">
                        A Class
                    </h2>
                    <p>
                        A Class e tipit mercedes-benz eshte nje makine kompakte me pese dyer e prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary" href='/pricing'>Order</Button>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={car9} alt="A Class" className="rounded-circle w-50"/>
                    </div>
                    <h2 className="text-center">
                        B Class
                    </h2>
                    <p>
                        B Class e tipit mercedes-benz eshte nje makine kompakte me pese dyer me nje dizajn monovolumeni te prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary" href='/pricing'>Order</Button>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={car5} alt="G Class" className="rounded-circle w-50"/>
                    </div>
                    <h2 className="text-center">
                        G Class
                    </h2> 
                    <p>
                        G Class e tipit mercedes-benz eshte nje SUV luksoz me kater rrota terheqese i prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary" href='/pricing'>Order</Button>
                    </div> 
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={car8} alt="B Class" className="rounded-circle w-50"/>
                    </div>
                    <h2 className="text-center">
                        A Class
                    </h2>
                    <p>
                        A Class e tipit mercedes-benz eshte nje makine kompakte me pese dyer e prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary" href='/pricing'>Order</Button>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={car9} alt="A Class" className="rounded-circle w-50"/>
                    </div>
                    <h2 className="text-center">
                        B Class
                    </h2>
                    <p>
                        B Class e tipit mercedes-benz eshte nje makine kompakte me pese dyer me nje dizajn monovolumeni te prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary" href='/pricing'>Order</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default bodyz;