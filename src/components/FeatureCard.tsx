import Card from 'react-bootstrap/Card';

type FeatureCardProps = {
  icon: JSX.Element;
  title: string;
  children: JSX.Element;
};

const FeatureCard = ({ icon, title, children }: FeatureCardProps) => {
  return (
    <Card className="text-center text-light bg-transparent border border-2 border-light">
      <div className="c-header position-relative">
        <div className="text-light p-3 rounded-circle position-absolute" style={{ left: "50%", transform: "translate(-50%, -50%)", background: "linear-gradient(180deg, #C7ADFF 0%, #7151A9 100%)" }}>
          {icon}
        </div>
      </div>
      <Card.Body style={{ paddingTop: "2.5em" }}>
        <Card.Title as="h3" className='fw-bolder'>{title}</Card.Title>
        <Card.Text>
          {children}
        </Card.Text>
      </Card.Body>
    </Card >
  );
};

export default FeatureCard;
