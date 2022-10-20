import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProblemSpace from './components/ProblemSpace';
import Introduction from './components/Introduction';
import Headline from './components/Headline';

function App() {
  return (
    <div className="App">
      <Container>
        {/* <ProblemSpace /> */}
        {/* <Introduction /> */}

        <div className="our-solution fs-5">
          <Row>
            <Col md="6">
              <Headline headline="AI and ML Developers"/>
              <p>By providing access to computing which is</p>
              <ul>
                <li>Affordable</li>
                <li>Time-Efficient</li>
                <li>Optimized</li>
              </ul>
              <p>alongside facilitating easy development with features like</p>
              <ul>
                <li>Distributed Learning</li>
                <li>One-Step Plugins</li>
              </ul>
            </Col>
            <Col md="6">Image Here</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
