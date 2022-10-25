type HeadingProps = {
  children: JSX.Element;
};

const Heading = ({ children }: HeadingProps) => {
  return <h2 className="h1 fw-bolder">{children}</h2>;
};

export default Heading;
