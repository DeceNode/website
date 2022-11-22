import FeatureCard from "./FeatureCard";
import { BsCheck2Circle } from "react-icons/bs";

const Features = () => {
  return (
    <>
      <FeatureCard icon={<BsCheck2Circle/>} heading="Payments in FIAT Currencies">
        <p>
          Unlike Web3.0 platforms, we operate on{" "}
          <span className="fw-bold">non-volatile, non-crypto</span> payment
          methods using simple, <span className="fw-bold">day-to-day</span>{" "}
          currencies.
        </p>
      </FeatureCard>
    </>
  );
};

export default Features;
