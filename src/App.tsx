import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ProblemSpace from './components/ProblemSpace';
import ImageResponsive from './components/ImageResponsive';

function App() {
  return (
    <div className="App">
      <Container>
        <ProblemSpace />
        <div className="our-solution text-center shadow rounded-4 mb-5">
          <h2 className="h1 fw-bolder">Introducing Decenode, a <span className="text-primary">cheaper</span> & <span className="text-primary">quicker</span> way to compute.</h2>

          <ImageResponsive src="Illustration-Solution.svg" alt="Illustration-Solution" className="mb-3" />

          <p className="fs-5">Decenode is an exponential platform resembling an "AirBNB for Computers", provides cost and time-efficient computation to AI and ML developers through its decentralized P2P network, along with the benefit of optimized computation by leveraging distributed computing.</p>
        </div>
      </Container>
    </div>
  );
}

export default App;
