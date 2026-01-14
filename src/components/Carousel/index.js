import Carousel from 'react-bootstrap/Carousel';
import first from '../../images/car8.png';
import second from '../../images/car5.png';
import third from '../../images/car9.png';


function CarouselFadeExample() {
  return (
    <div className="w-75 m-auto mt-4 mb-4">
     <Carousel>
            <Carousel.Item>
                <img src={first} text="First slide" alt='First slide' className='w-100' />
                <Carousel.Caption>
                    <h3>First Car</h3>
                    <p>This is A class</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={second} text="Second slide" alt='Second slide' className='w-100' />
                <Carousel.Caption>
                    <h3>Second Car</h3>
                    <p>This is G class</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={third} text="Second slide" alt='Second slide' className='w-100' />
                <Carousel.Caption>
                    <h3>Third Car</h3>
                    <p>This is B class</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
  );
}

export default CarouselFadeExample;