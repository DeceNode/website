type HeadlineProps = {
    headline: string
}

const Headline = ({ headline }: HeadlineProps) => {
    return (
        <h3 className="my-3 fw-bolder">{headline}</h3>
    );
}

export default Headline;