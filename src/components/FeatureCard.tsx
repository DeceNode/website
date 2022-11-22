type FeatureCardProps = {
  icon: JSX.Element;
  heading: string;
  children: JSX.Element;
};

const FeatureCard = ({ icon, heading, children }: FeatureCardProps) => {
  return (
    <>
      <div className="feature-card">
        <div className="bg-primary text-light rounded-circle d-flex align-items-center justify-content-center">{icon}</div>
        <h3 className="fw-bold">{heading}</h3>
        {children}
      </div>
    </>
  );
};

export default FeatureCard;
