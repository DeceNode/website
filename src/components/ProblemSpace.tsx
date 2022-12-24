import { Row, Col, Container } from "react-bootstrap";
import ImageResponsive from "./ImageResponsive";
import EyebrowHeadline from "./EyebrowHeadline";
import ListView from "./ListView";
import Heading from "./Heading";

const ProblemSpace = () => {
  return (
    <div className="problem-space p-3 p-md-5">
      <Container>
        <Row className="align-items-center">
          <Col md="6">
            <ImageResponsive
              src="Illustration-Problem-Space.svg"
              alt="problem space"
            />
          </Col>
          <Col md="6">
            <EyebrowHeadline headline="Problem Space" />
            <Heading>
              <>
                Computation is{" "}
                <span className="text-primary-gradient">expensive & time-consuming</span>
                .
              </>
            </Heading>
            <ListView
              items={[
                "Computationally intensive tasks like Artificial Intelligence and Machine Learning demand sophisticated CPUs & GPUs which are heavy on the pocket.",
                "Alternatively, using cloud computation is expensive as well due to the monopolization of the cloud industry.",
                "Training using a single GPU can be extremely slow and frustrating.",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProblemSpace;
