import FeatureCard from "./FeatureCard";
import EyebrowHeadline from "./EyebrowHeadline";
import Heading from "./Heading";
import { BsCashCoin, BsFileEarmarkCode, BsShieldCheck, BsSpeedometer2 } from "react-icons/bs";
import { Container } from "react-bootstrap";
import {motion} from "framer-motion";


const Features = () => {

  const container = {
    hidden: { opacity: 0 , },
    show: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.5, 
        ease:"easeInOut", 
      }
    }
  }

  return (
    <div className="features">
      <img src="wave-pattern.svg" style={{ width: "100%"  }} alt="wave pattern" />
      <div className="features-body p-3" style={{ backgroundColor: "#3F3649" }}>
        <Container>
          <div className="section-header text-center mb-5">
            <EyebrowHeadline headline="Unique features" className="text-light" />
            <Heading className="text-light">
              <>
                What Makes Us
                <br />
                <span className="text-primary-gradient">
                  {" "} Different
                </span>
              </>
            </Heading>
          </div>
          <motion.div variants={container}
    initial="hidden"
    whileInView="show" className="feature-cards py-5">
            <FeatureCard icon={<BsCashCoin size={48} />} title="Payments in FIAT Currencies">
              <>
                Unlike Web3.0 platforms, we operate on{" "}
                <span className="fw-bold">non-volatile, non-crypto</span> payment
                methods using simple, <span className="fw-bold">day-to-day</span>{" "}
                currencies.
              </>
            </FeatureCard>

            <FeatureCard icon={<BsFileEarmarkCode size={48} />} title="Curated for ML Developers">
              <>
                Our user-friendly platform facilitates <span className="fw-bold">quick and easy</span> ML development via specialized tools like one-step plugin systems and distributed computing.
              </>
            </FeatureCard>

            <FeatureCard icon={<BsShieldCheck size={48} />} title="Secure & Robust Technology">
              <>
                Our backend is secured by <span className="fw-bold">robust encryption protocols</span> enabling you to use computing resources globally without worrying about any security concerns.
              </>
            </FeatureCard>

            <FeatureCard icon={<BsSpeedometer2 size={48} />} title="Quick Connection Speeds">
              <>
                Connecting to servers in close proximity ensures <span className="fw-bold">low network latency</span> resulting into faster and <span className="fw-bold">time-efficient</span> developement.
              </>
            </FeatureCard>

          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Features;
