import Heading from "./Heading";
import ImageResponsive from "./ImageResponsive";

const Introduction = () => {
  return (
    <div className="introduction text-center shadow rounded-4 mb-5">
      <Heading>
        <>
          Introducing Decenode, a <span className="text-primary">cheaper</span>{" "}
          & <span className="text-primary">quicker</span> way to compute.
        </>
      </Heading>

      <ImageResponsive
        src="Illustration-Solution.svg"
        alt="Illustration-Solution"
        className="mb-3"
      />

      <p>
        Decenode is an exponential platform resembling an "AirBNB for
        Computers", provides cost and time-efficient computation to AI and ML
        developers through its decentralized P2P network, along with the benefit
        of optimized computation by leveraging distributed computing.
      </p>
    </div>
  );
};

export default Introduction;
