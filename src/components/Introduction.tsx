import Heading from "./Heading";

import { Player } from '@lottiefiles/react-lottie-player';
import { Container } from "react-bootstrap";
import {motion} from "framer-motion";


const Introduction = () => {
  return (
    <div className="introduction-parent p-1 p-md-3 pt-md-8">
      <Container>
        <div className="text-center shadow rounded-4 bg-white mb-5 p-4 p-md-6">
          <Heading>
            <>
              Introducing Decenode.
              <br />
              a{" "}
              <span className="text-primary-gradient">cheaper</span> &{" "}
              <span className="text-primary-gradient">quicker</span> way to
              compute.
            </>
          </Heading>

          <Player src="decenode-globe/data.json" className="player" loop autoplay style={{ maxWidth: "500px" }} />

          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeInOut", duration:1.5}} className="">
            Decenode is an exponential platform resembling an "AirBNB for
            Computers", that provides <span className="fw-bold">cost</span> and <span className="fw-bold">time-efficient</span> computation to AI and ML
            developers by connecting to idle machines hosted on our <span className="fw-bold">decentralized P2P</span> network, in addition to achieving <span className="fw-bold">optimized distributed computing</span> by fusing the power of multiple computers.
          </motion.p>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;

