import ListView from "./ListView";

import { BsCheck2Circle } from "react-icons/bs";
import Headline from "./Headline";
import { Row, Col } from "react-bootstrap";
import ImageResponsive from "./ImageResponsive";

const OurSolution = () => {
  return (
    <div className="our-solution">
      <Row className="align-items-center">
        <Col md={{ span: 6, order: "last" }}>
          <ImageResponsive
            src="Illustration-Developer.svg"
            alt="Illustration-Developer"
            className="mb-3"
          />
        </Col>
        <Col md={{ span: 6, order: "first" }}>
          <Headline headline="AI and ML Developers" />
          <p>By providing access to computing which is</p>
          <ListView
            items={["Affordable", "Time-Efficient", "Optimized"]}
            icon={<BsCheck2Circle />}
          />
          <p>alongside facilitating easy development with features like</p>
          <ListView
            items={["Distributed Learning", "One-Step Plugins"]}
            icon={<BsCheck2Circle />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default OurSolution;
