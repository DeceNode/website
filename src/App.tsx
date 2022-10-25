import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProblemSpace from './components/ProblemSpace';
import Introduction from './components/Introduction';
import Headline from './components/Headline';

import { BsCheck2Circle } from "react-icons/bs";
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
