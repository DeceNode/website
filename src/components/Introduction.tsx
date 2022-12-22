import Heading from "./Heading";
import ImageResponsive from "./ImageResponsive";

import { Player } from '@lottiefiles/react-lottie-player';
import { Container } from "react-bootstrap";

const Introduction = () => {
  return (
    <div className="introduction-parent mb-5" style={{ padding: "10rem 3rem 3rem 3rem" }}>
      <div className="introduction-body">
        <Container>
          <div className="introduction text-center shadow rounded-4 bg-white mb-5" style={{ padding: "5rem" }}>
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

            {/* <ImageResponsive
          src="Illustration-Solution.svg"
          alt="Illustration-Solution"
          className="mb-3"
        /> */}

            <Player src="decenode-globe/data.json" className="player" loop autoplay style={{ maxWidth: "500px" }} />

            <p className="">
              Decenode is an exponential platform resembling an "AirBNB for
              Computers", that provides <span className="fw-bold">cost</span> and <span className="fw-bold">time-efficient</span> computation to AI and ML
              developers by connecting to idle machines hosted on our <span className="fw-bold">decentralized P2P</span> network, in addition to achieving <span className="fw-bold">optimized distributed computing</span> by fusing the power of multiple computers.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Introduction;

