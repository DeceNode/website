import React from 'react';
// import './App.css';
import './App.scss'

// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ProblemSpace from './components/ProblemSpace';
import Introduction from './components/Introduction';
import OurSolution from './components/OurSolution';

function App() {
  return (
    <div className="App fs-5">
      <Container>
        <ProblemSpace />
        <Introduction />
        <OurSolution />
      </Container>
    </div>
  );
}

export default App;
