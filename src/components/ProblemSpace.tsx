import { Row, Col } from "react-bootstrap";
import ImageResponsive from "./ImageResponsive";
import EyebrowHeadline from "./EyebrowHeadline";
import ListView from "./ListView";
import Heading from "./Heading";

const ProblemSpace = () => {
  return (
    <div className="problem-space mb-5">
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
              <span className="text-primary-gradient">expensive and time-consuming</span>
              .
            </>
          </Heading>
          <ListView
            items={[
              "Computationally intensive tasks like Artificial Intelligence and Machine Learning demand sophisticated GPUs which are heavy on the pocket.",
              "Alternatively, using cloud computation is expensive due to the monopolization of the cloud industry.",
              "Training using a single GPU can be extremely slow and frustrating.",
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProblemSpace;
