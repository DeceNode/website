import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ProblemSpace from './components/ProblemSpace';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <Container>
        <ProblemSpace />
        <Introduction />
      </Container>
    </div>
  );
}

export default App;
