
import { Col, Container, Row, Stack } from "react-bootstrap";
import { TbBrandInstagram, TbBrandLinkedin, TbBrandDiscord, TbBrandTwitter } from "react-icons/tb";


const Footer = () => {
    return (

        <div className="footer text-light pb-3 overflow-hidden" style={{ backgroundColor: "#654A90" }}>
            <img src="footer-wave-top.svg" style={{ backgroundColor: "#3F3649" }} />
            <Container>
                <Row>
                    <Col md="auto" className="text-center">© 2023 Decenode FZ-LLC</Col>
                    <Col md="auto" className="ms-auto">
                        <Stack direction="horizontal" gap={3} className="align-items-center justify-content-center">
                            <TbBrandTwitter size={48} />
                            <TbBrandInstagram size={48} />
                            <TbBrandLinkedin size={48} />
                            <TbBrandDiscord size={48} />
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>

        // <div className="footer text-light pt-5 position-relative" style={{ backgroundColor: "#3F3649" }}>
        //     <img src="footer-wave-top.svg" style={{ width: "100%" }} />
        //     <div className="footer-body" style={{ backgroundColor: "#654A90" }}>
        //         <Container>
        //             <Row>
        //                 <Col md="6" className="legal">
        //                     <p>© 2023 Decenode FZ-LLC</p>
        //                 </Col>
        //                 <Col md="6" className="socials">
        //                     <TbBrandTwitter size={48} />
        //                     <TbBrandInstagram size={48} />
        //                     <TbBrandLinkedin size={48} />
        //                     <TbBrandDiscord size={48} />
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </div>
        // </div>
    );
};

export default Footer;