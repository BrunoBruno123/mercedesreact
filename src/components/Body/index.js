
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./index.css";
import car5 from '../../images/car5.png';
import car8 from '../../images/car8.png';
import car9 from '../../images/car9.png';

const HomeBody = () => {
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
                        G Class e tipit mercedes-benz është një SUV luksoz me katër rrota tërheqëse i prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary">Order</Button>
                    </div> 
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={car8} alt="B Class" className="rounded-circle w-50"/>
                    </div>
                    <h2 className="text-center">
                        B Class
                    </h2>
                    <p>
                        B class e tipit mercedes-benz është një makinë kompakte me pesë dyer me një dizajn monovolumeni të prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary">Order</Button>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={car9} alt="A Class" className="rounded-circle w-50"/>
                    </div>
                    <h2 className="text-center">
                        A Class
                    </h2>
                    <p>
                        A Class e tipit mercedes-benz është një makinë kompakte me pesë dyer e prodhuar nga prodhuesi gjerman i makinave Mercedes-Benz.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary">Order</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeBody;
