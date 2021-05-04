import React from 'react';
import { Carousel } from 'react-bootstrap';
import ocean from '../assets/ocean.jpeg';
const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: '600px' }}>
        <img src={ocean} alt="First slide" className="d-block w-100 img-fluid" />
        <Carousel.Caption>
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <img src={ocean} alt="First slide" className="d-block w-100 img-fluid" />
        <Carousel.Caption>
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <img src={ocean} alt="First slide" className="d-block w-100 img-fluid" />
        <Carousel.Caption>
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;
