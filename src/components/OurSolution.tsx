import ListView from "./ListView";

import { BsCheck2Circle } from "react-icons/bs";
import Headline from "./Headline";
import { Row, Col, Container } from "react-bootstrap";
import ImageResponsive from "./ImageResponsive";
import EyebrowHeadline from "./EyebrowHeadline";
import Heading from "./Heading";

const OurSolution = () => {
  return (
    <Container>
      <div className="our-solution">
        <div className="section-header text-center mb-5">
          <EyebrowHeadline headline="Our Solution" />
          <Heading>
            <>
              Our{" "}
              <span className="text-primary-gradient">
                decentralized
                <br />
                marketplace
              </span>{" "}
              platform enables
            </>
          </Heading>
        </div>

        <Row className="align-items-center mb-5">
          <Col md={{ span: 6, order: "last" }}>
            <ImageResponsive
              src="Illustration-Developer.svg"
              alt="Illustration-Developer"
              className="mb-0"
            />
          </Col>
          <Col md={{ span: 6, order: "first" }}>
            <Headline headline="AI and ML Developers" />
            <p>By providing access to computing which is</p>
            <ListView
              items={["Affordable", "Time-Efficient", "Optimized"]}
              icon={<BsCheck2Circle size={24} />}
              className="fw-bold text-secondary"
            />
            <p>alongside facilitating easy development with features like</p>
            <ListView
              items={["Distributed Computing", "One-Step Plugin Setup"]}
              icon={<BsCheck2Circle size={24} />}
              className="fw-bold text-secondary"
            />
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md="6">
            <ImageResponsive
              src="Illustration-Owners.svg"
              alt="Illustration-Owners"
              className="mb-0"
            />
          </Col>
          <Col md="6">
            <Headline headline="Owners of idle computers" />
            <p>By helping them monetize their dead computing assets to</p>
            <ListView
              items={[
                "Generate Passive Income",
                "with One Click",
                "from Anywhere, at Anytime",
              ]}
              icon={<BsCheck2Circle size={24} />}
              className="fw-bold text-secondary"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OurSolution;
