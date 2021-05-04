import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import ocean from '../assets/ocean.jpeg';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(${ocean}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"> </div>
        <Container>
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam delectus distinctio temporibus culpa
            labore, hic aperiam amet eum, totam cupiditate fugit reprehenderit et facilis quidem eveniet quis repellat commodi.
          </p>
        </Container>
      </Jumbo>
    </Styles>
  );
};
export default Jumbotron;
