import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProblemSpace from './components/ProblemSpace';
import Introduction from './components/Introduction';
import Headline from './components/Headline';

import { BsCheck2Circle } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Container>
        {/* <ProblemSpace /> */}
        {/* <Introduction /> */}

        <div className="our-solution fs-5">
          <Row>
            <Col md="6">
              <Headline headline="AI and ML Developers" />
              <p>By providing access to computing which is</p>
              <ul className='list-unstyled'>
                <li className='mb-3'><BsCheck2Circle className='me-2 color-success' />Affordable</li>
                <li className='mb-3'><BsCheck2Circle className='me-2' />Time-Efficient</li>
                <li className='mb-3'><BsCheck2Circle className='me-2' />Optimized</li>
              </ul>
              <p>alongside facilitating easy development with features like</p>
              <ul>
                <li><BsCheck2Circle />Distributed Learning</li>
                <li><BsCheck2Circle />One-Step Plugins</li>
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
