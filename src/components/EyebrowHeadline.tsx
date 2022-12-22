// Eyebrow Headline

// Read More:
// https://uxmovement.com/content/increasing-headline-clicks-with-eyebrow-text/

type EyebrowHeadlineProps = {
    headline: string,
    className?: string
}

const EyebrowHeadline = ({ headline, className = "" }: EyebrowHeadlineProps) => {
    return (
        <span className={`eyebrow text-primary text-uppercase fw-bold ${className}`} style={{ fontSize: "17px" }}>{headline}</span>
    );
}

export default EyebrowHeadline;