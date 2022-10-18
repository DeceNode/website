// Eyebrow Headline

// Read More:
// https://uxmovement.com/content/increasing-headline-clicks-with-eyebrow-text/

type EyebrowHeadlineProps = {
    headline: string
}

const EyebrowHeadline = ({ headline }: EyebrowHeadlineProps) => {
    return (
        <span className="eyebrow text-primary text-uppercase">{headline}</span>
    );
}

export default EyebrowHeadline;