type HeadingProps = {
  children: JSX.Element;
};

const Heading = ({ children }: HeadingProps) => {
  return <h2 className="h1 fw-bolder mb-3">{children}</h2>;
};

export default Heading;
