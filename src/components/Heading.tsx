import {motion} from "framer-motion";

type HeadingProps = {
  children: JSX.Element;
  className?: string;
};

const Heading = ({ children, className = "" }: HeadingProps) => {
  return (
  <motion.div initial={{ opacity: 0, y:40 }}
  transition={{duration:0.5, ease:'easeInOut'}}
  whileInView={{ y:0, opacity: 1, }}
  viewport={{ once: false}}> 
  <h2 className={`display-5 fw-bolder mt-2 mb-4 ${className}`}>{children}</h2>
  </motion.div>
)};

export default Heading;
