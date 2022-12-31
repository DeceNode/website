import { useState, FormEvent } from "react";
import axios from 'axios';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

const Landing = () => {

  const placeholderText = [
    { type: "heading1", text: "Sharing Power" },

  ];

  const placeholderText2 = [{ type: "heading2", text: "One Click Away" },

  ];

  const container = {
    visible: {
      // opacity: 1,
      transition: {
        staggerChildren: 0.03,
      }
    }
  };

  const container1 = {
    visible: {
      // opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },

    }
  };

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setLoading(true)
      const data = { Date: (new Date()).toLocaleDateString('en-GB'), Email: email.trim() }
      axios
        .post("https://sheet.best/api/sheets/0cc75350-be47-400d-a58f-711cd309b398", data)
        .then((res) => {
          setEmail('');
          setLoading(false);
        })
    }
  }

  return (
    <section className="showcase text-light position-relative end-0 w-100 min-vh-100 d-flex justify-content-between align-items-center" style={{ zIndex: "2" }}>
      <header className="py-5 position-absolute top-0 start-0 w-100 d-flex justify-content-between align-items-center" style={{ zIndex: "1000" }}>
        <Container>
          <div className="logo"><img alt="decenode logo" src="Logo_Primary.svg" /></div>
          <div className="menu"></div>
        </Container>
      </header>
      <video src="Network_Connection_Background_Purple_1.mp4" muted loop autoPlay playsInline className="position-absolute top-0 start-0 w-100 h-100 " style={{ objectFit: "cover" }} />
      <Container>
        <div className="text position-relative" style={{ zIndex: "10" }}>
          <Row>
            <Col xxl="8">
              {/* <motion.div> */}
              {/* <h1 className="fw-bolder display-1"><span className="text-primary-gradient">  */}
              <motion.div initial="hidden" whileInView="visible" variants={container}>{placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} className="text-primary-gradient mt-5 pt-5" />;
              })}</motion.div>

              <motion.div initial="hidden" whileInView="visible"
                variants={container1}>{placeholderText2.map((item, index) => {
                  return <AnimatedText {...item} key={index} className="text-light" />;
                })}</motion.div>

              {/* <h1 className="fw-bolder display-1"> <br /> One Click Away. </h1> */}
              {/* </span></h1>  */}
              {/* </motion.div>  */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2, duration: 0.35 }}>
                <p className="mt-4" >We enable Machine Learning Developers gain access to affordable computation by leveraging the power of idle machines hosted on our decentralized P2P network.</p>
                <Form className="my-md-5" onSubmit={handleSubmit}>
                  <Row className="align-items-start">
                    <Col md="8" className="mb-2 mb-md-0">
                      <Form.Control type="email" placeholder="Enter Email" size="lg" name="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </Col>
                    <Col md="4">
                      <motion.div
                        whileHover={{ scale: 1.1, borderRadius: "100%" }}
                        whileTap={{
                          scale: 0.8,
                          // rotate: -90,
                          borderRadius: "100%"
                        }}>
                        <Button variant="primary" type="submit" size="lg" className={`w-100 ${loading ? 'disabled' : ''}`}>
                          Join the waitlist
                        </Button> </motion.div>
                    </Col>
                    <Col>
                      <Form.Text className="text-light">
                        Be the first one to know when we go live!
                      </Form.Text>
                    </Col>
                  </Row>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </section >
  )
}

export default Landing;