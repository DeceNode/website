type ImageResponsiveProps = {
    src: string,
    alt: string,
    className?: string
}

const ImageResponsive = ({ src, alt, className = "" }: ImageResponsiveProps) => {
    return (
        <img src={src} alt={alt} className={`img-fluid ${className}`} />
    );
}

export default ImageResponsive;