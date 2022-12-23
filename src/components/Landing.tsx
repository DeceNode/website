import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Landing = () => {
    return (
        <section className="showcase text-light" style={{
            position: "relative",
            right: "0",
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#111",
            zIndex: "2"

        }}>
            <header className="py-5" style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                zIndex: "1000",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Container>
                    <div className="logo"><img alt="decenode logo" src="Logo_Primary.svg" /></div>
                    <div className="menu"></div>
                </Container>
            </header>
            <video src="Network_Connection_Background_Purple_1.mp4" muted loop autoPlay style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }} />
            <Container>
                <div className="text" style={{
                    position: "relative",
                    zIndex: "10"
                }}>
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

// const Landing = () => {
//     return (
//         <>
//             <div className="text-light py-3 d-flex align-items-center position-absolute start-0 end-0" style={{ height: "100vh" }}>
//                 <Container>
//                     <div className="header mb-5">
//                         <img alt="decenode logo" src="Logo_Primary.svg" />
//                     </div>
//                     <Row>
//                         <Col xxl="8">
//                             <div className="body">
//                                 <div className="main-text mb-5">
//                                     <h1 className="fw-bolder display-1"><span className="text-primary-gradient">Sharing Power</span> <br /> One Click Away.</h1>
//                                     <p>We enable Machine Learning Developers gain access to affordable computation by leveraging the power of idle machines hosted on our decentralized P2P network.</p>
//                                 </div>
//                                 <div className="signup-form">
//                                     <Form>
//                                         <Row className="align-items-start">
//                                             <Col md="8" className="mb-2 mb-md-0">
//                                                 <Form.Control type="email" placeholder="Enter Email" size="lg" />
//                                             </Col>
//                                             <Col md="4">
//                                                 <Button variant="primary" type="submit" size="lg" className="w-100">
//                                                     Join the waitlist
//                                                 </Button>
//                                             </Col>
//                                             <Col>
//                                                 <Form.Text className="text-light">
//                                                     Be the first one to know when we go live!
//                                                 </Form.Text>
//                                             </Col>
//                                         </Row>
//                                     </Form>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//             <div className="fullscreen-bg">
//                 <video loop muted autoPlay>
//                     <source
//                         src="Network_Connection_Background_Purple_1.mp4"
//                         type="video/mp4"
//                     />
//                 </video>
//             </div>
//         </>
//     );
// }

export default Landing;