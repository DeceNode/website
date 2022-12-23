import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Landing = () => {
    return (
        <section className="showcase text-light position-relative end-0 w-100 min-vh-100 d-flex justify-content-between align-items-center" style={{ zIndex: "2" }}>
            <header className="py-5 position-absolute top-0 start-0 w-100 d-flex justify-content-between align-items-center" style={{ zIndex: "1000" }}>
                <Container>
                    <div className="logo"><img alt="decenode logo" src="Logo_Primary.svg" /></div>
                    <div className="menu"></div>
                </Container>
            </header>
            <video src="Network_Connection_Background_Purple_1.mp4" muted loop autoPlay className="position-absolute top-0 start-0 w-100 h-100 " style={{ objectFit: "cover" }} />
            <Container>
                <div className="text position-relative" style={{ zIndex: "10" }}>
                    <Row>
                        <Col xxl="8">
                            <h1 className="fw-bolder display-1"><span className="text-primary-gradient">Sharing Power</span> <br /> One Click Away.</h1>
                            <p>We enable Machine Learning Developers gain access to affordable computation by leveraging the power of idle machines hosted on our decentralized P2P network.</p>
                            <Form className="my-md-5">
                                <Row className="align-items-start">
                                    <Col md="8" className="mb-2 mb-md-0">
                                        <Form.Control type="email" placeholder="Enter Email" size="lg" />
                                    </Col>
                                    <Col md="4">
                                        <Button variant="primary" type="submit" size="lg" className="w-100">
                                            Join the waitlist
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Form.Text className="text-light">
                                            Be the first one to know when we go live!
                                        </Form.Text>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section >
    )
}

export default Landing;