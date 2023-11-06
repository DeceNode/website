import { Row, Col, Container } from "react-bootstrap";
import EyebrowHeadline from "./EyebrowHeadline";
import ListView from "./ListView";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';


const ProblemSpace = () => {

  return (
    <div id="problem-space" className="p-3 p-md-5">
      <Container>
        {/* <Row ref={ref} className="align-items-center"> */}
        <Row className="align-items-center">


          <Col md="6">
            {/* <motion.div animate= {animation}> */}
            <motion.div initial={{ opacity: 0, }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: false }}
            >

              {/* <ImageResponsive
                src="Illustration-Problem-Space.svg"
                alt="problem space"
              /> */}

              <Player src="Animation-1/data.json" className="player" loop autoplay style={{ maxWidth: "500px" }} />
            </motion.div>
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
