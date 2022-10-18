import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Row>
        <Col md="6">Image Here</Col>
        <Col md="6">
          <span className='text-uppercase'>Problem Space</span>
          <h2>Computation is expensive and time-consuming.</h2>
          <ul>
            <li>Computationally intensive tasks like Artificial Intelligence and Machine Learning demand sophisticated GPUs which are heavy on the pocket.</li>
            <li>Alternatively, using cloud computation is expensive due to the monopolization of the cloud industry.</li>
            <li>Training using a single GPU can be extremely slow and frustrating.</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default App;
