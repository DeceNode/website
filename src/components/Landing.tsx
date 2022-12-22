import { Container } from "react-bootstrap";

const Landing = () => {
    return (
        <div className="landing text-light mb-5">
            <Container>
                <div className="position-absolute" style={{ maxWidth: "45%" }}>
                    <h1 className="fw-bolder display-1"><span className="text-primary">Sharing Power</span> <br /> One Click Away.</h1>
                    <p>We enable Machine Learning Developers gain access to affordable computation by leveraging the power of idle machines hosted on our decentralized P2P network.</p>
                </div>
            </Container>
            <div className="fullscreen-bg">
                <video loop muted autoPlay>
                    <source
                        src="Network_Connection_Background_Purple_1.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    )
}

export default Landing;