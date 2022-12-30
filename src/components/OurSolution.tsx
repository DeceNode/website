import ListView from "./ListView";
import { Player } from '@lottiefiles/react-lottie-player';
import { BsCheck2Circle } from "react-icons/bs";
import Headline from "./Headline";
import { Row, Col, Container } from "react-bootstrap";
import ImageResponsive from "./ImageResponsive";
import EyebrowHeadline from "./EyebrowHeadline";
import Heading from "./Heading";

const OurSolution = () => {
  return (
    <div className="our-solution p-3 p-md-5">
      <Container>
        <div className="section-header text-center mb-5">
          <EyebrowHeadline headline="Our Services" />
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

        <Row className="align-items-center justify-content-around mb-5">
          <Col md="auto" className="order-xl-last">
            {/* <ImageResponsive
              src="Illustration-Developer.svg"
              alt="Illustration-Developer"
              className="mb-0"
            /> */}

            <Player src="Animation-2/data.json" className="player" loop autoplay style={{ maxWidth: "500px" }} />
          </Col>
          <Col md="auto" className="order-xl-first">
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
              className="fw-bold text-secondary" delay={4}
            />
          </Col>
        </Row>

        <Row className="align-items-center justify-content-around mb-5">
          <Col md="auto">
            {/* <ImageResponsive
              src="Illustration-Owners.svg"
              alt="Illustration-Owners"
              className="mb-0"
            /> */}
            <Player src="Animation-3/data.json" className="player" loop autoplay style={{ maxWidth: "500px" }} />
          </Col>
          <Col md="auto">
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
      </Container>
    </div>
  );
};

export default OurSolution;
