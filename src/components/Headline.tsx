type HeadlineProps = {
    headline: string
}

const Headline = ({ headline }: HeadlineProps) => {
    return (
        <h2 className="my-3 fw-bolder">{headline}</h2>
    );
}

export default Headline;