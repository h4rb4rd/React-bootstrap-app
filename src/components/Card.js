import React from 'react';
import ocean from '../assets/ocean.jpeg';
import { Col, Card, Button } from 'react-bootstrap';

const CardComponent = () => {
  return (
    <Col>
      <Card style={{ width: '18rem' }} className="mb-4">
        <Card.Img variant="top" src={ocean} />
        <Card.Body>
          <Card.Title>Lorem, ipsum dolor</Card.Title>
          <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, inventore.</Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardComponent;
