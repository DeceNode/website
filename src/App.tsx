import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ProblemSpace from './components/ProblemSpace';

function App() {
  return (
    <div className="App">
      <Container>
        <ProblemSpace />
      </Container>
    </div>
  );
}

export default App;
