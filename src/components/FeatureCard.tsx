import Card from 'react-bootstrap/Card';
import {motion} from "framer-motion";
import { isSpreadAssignment } from 'typescript';


const item = {
  hidden: { opacity: 0, },
  show: { opacity: 1, transition:{type:"spring",
  bounce:0.3, 
  }}
}


type FeatureCardProps = {
  icon: JSX.Element;
  title: string;
  children: JSX.Element;
};

const FeatureCard = ({ icon, title, children }: FeatureCardProps) => {
  return (
    <motion.div variants={item} className='card_wrapper'>
    <Card className="text-center text-light bg-transparent border border-2 border-light">
      <div className="c-header position-relative">
      
        <motion.div className="text-light p-3 rounded-circle position-absolute" style={{ left: "50%", transform: "translate(-50%, -50%)", background: "linear-gradient(180deg, #C7ADFF 0%, #7151A9 100%)" }}>
          {icon}
        </motion.div>
      </div>
      <Card.Body style={{ paddingTop: "2.5em" }}>
        <Card.Title as="h4" className='fw-bolder'>{title}</Card.Title>
        <Card.Text>
          {children}
        </Card.Text>
      </Card.Body>
    </Card >
    </motion.div>
  );
};

export default FeatureCard;
