type HeadingProps = {
  children: JSX.Element;
  className?: string;
};

const Heading = ({ children, className = "" }: HeadingProps) => {
  return <h2 className={`display-4 fw-bolder mt-2 mb-4 ${className}`}>{children}</h2>;
};

export default Heading;
