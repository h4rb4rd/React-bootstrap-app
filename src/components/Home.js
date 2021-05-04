import React from 'react';
import Slider from './Slider';
import { Container, Row, Col } from 'react-bootstrap';

import Jumbotron from '../utils/jumbotron';
import CardComponent from './Card';
import ocean from '../assets/ocean.jpeg';

const Home = () => {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Row>
      </Container>
      <Jumbotron />
      <Container style={{ marginBottom: '30px' }}>
        <Row>
          <Col md={7}>
            <img src={ocean} height={300} />
          </Col>
          <Col md={5}>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias soluta cum dolor veniam nobis obcaecati, rem quos
              esse, qui dignissimos cupiditate sunt excepturi, corrupti unde! Adipisci eligendi animi porro nulla dicta soluta
              laboriosam! Quis repellat, sit natus autem nulla harum dignissimos deserunt aut repellendus error laboriosam
              officiis soluta ipsum nobis, totam enim modi. Excepturi, numquam! Consequatur eligendi repellat ratione molestiae
              nemo nesciunt magnam deleniti nihil facere beatae ipsum, dolorum modi maxime labore mollitia, omnis dignissimos.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
