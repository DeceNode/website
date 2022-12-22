import "./App.scss";

// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import ProblemSpace from "./components/ProblemSpace";
import Introduction from "./components/Introduction";
import OurSolution from "./components/OurSolution";
import Features from "./components/Features";
import Landing from "./components/Landing";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App lh-lg" style={{ fontSize: "22px" }}>
      {/* <Container> */}
      <Landing />
      <ProblemSpace />
      <Introduction />
      <OurSolution />
      <Features />
      <Footer />
      {/* </Container> */}
    </div>
  );
}

export default App;
