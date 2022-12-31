import "./App.scss";

// import 'bootstrap/dist/css/bootstrap.min.css';
import ProblemSpace from "./components/ProblemSpace";
import Introduction from "./components/Introduction";
import OurSolution from "./components/OurSolution";
import Features from "./components/Features";
import Landing from "./components/Landing";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      < Landing />
      <ProblemSpace />
      <Introduction />
      <OurSolution />
      <Features />
      <Footer />
    </div >
  );
}

export default App;
