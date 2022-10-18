import { Row, Col } from "react-bootstrap";
import ImageResponsive from "./ImageResponsive";
import EyebrowHeadline from "./EyebrowHeadline";
import ListItem from "./ListItem";
import Headline from "./Headline";

const ProblemSpace = () => {
    return (
        <div className="problem-space mb-5">
            <Row className="align-items-center">
                <Col md="6">
                    <ImageResponsive src="Illustration-Problem-Space.svg" alt="problem space" />
                </Col>
                <Col md="6">
                    <EyebrowHeadline headline="Problem Space" />
                    <Headline headline="Computation is expensive and time-consuming." />
                    <ul>
                        <ListItem>Computationally intensive tasks like Artificial Intelligence and Machine Learning demand sophisticated GPUs which are heavy on the pocket.</ListItem>
                        <ListItem>Alternatively, using cloud computation is expensive due to the monopolization of the cloud industry.</ListItem>
                        <ListItem>Training using a single GPU can be extremely slow and frustrating.</ListItem>
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

export default ProblemSpace;