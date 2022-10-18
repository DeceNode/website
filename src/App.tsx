import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import ListItem from './components/ListItem';
import EyebrowHeadline from './components/EyebrowHeadline';
import ImageResponsive from './components/ImageResponsive';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="align-items-center">
          <Col md="6">
            <ImageResponsive src="Illustration-Problem-Space.svg" alt="problem space" />
          </Col>
          <Col md="6">
            <EyebrowHeadline headline="Problem Space" />
            <h2 className="my-3 fw-bolder">Computation is expensive and time-consuming.</h2>
            <ul>
              <ListItem>Computationally intensive tasks like Artificial Intelligence and Machine Learning demand sophisticated GPUs which are heavy on the pocket.</ListItem>
              <ListItem>Alternatively, using cloud computation is expensive due to the monopolization of the cloud industry.</ListItem>
              <ListItem>Training using a single GPU can be extremely slow and frustrating.</ListItem>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
