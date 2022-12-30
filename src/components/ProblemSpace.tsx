import { Row, Col, Container } from "react-bootstrap";
import ImageResponsive from "./ImageResponsive";
import EyebrowHeadline from "./EyebrowHeadline";
import ListView from "./ListView";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';


const ProblemSpace = () => {

  // const {ref, inView} = useInView({ threshold: 0.2});
  // const animation = useAnimation();

  // useEffect(() => {
  //   if(inView){
  //     animation.start({
  //       opacity:1,
  //       transition:{
  //         staggerChildren: 0.5
  //     }
  //     });
  //   }

  //   if(!inView){
  //     animation.start({opacity:0})
  //   }
  //   console.log("use effect hook, inView =", inView);
  // }, [inView]);


  // useEffect(() => {
  //   if(inView){
  //     animation1.start({
  //       opacity:1,
  //       transition:{
  //         delay:.2,
  //         duration:0.8,
  //         ease:'easeInOut'
  //     }
  //     });
  //   }

  //   if(!inView){
  //     animation1.start({opacity:0})
  //   }
  //   console.log("use effect hook, inView =", inView);
  // }, [inView]);



  const container = {
    // hidden: { opacity: 0 },
    show: {
      // opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }


  const textAnimate = {
    offscreen: { opacity: 0, x: 100, },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3, ease: "easeInOut"
      }
    }
  }

  const headingAnimate = {
    y: 0,
    opacity: 1,
    transition:
      { duration: 0.5, ease: "easeInOut" }
  }
  return (
    <div className="problem-space p-3 p-md-5">
      <Container>
        {/* <Row ref={ref} className="align-items-center"> */}
        <Row className="align-items-center">


          <Col md="6">
            {/* <motion.div animate= {animation}> */}
            <motion.div initial={{ opacity: 0, }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: false }}
            >

              {/* <ImageResponsive
                src="Illustration-Problem-Space.svg"
                alt="problem space"
              /> */}

              <Player src="Animation-1/data.json" className="player" loop autoplay style={{ maxWidth: "500px" }} />
            </motion.div>
          </Col>


          <Col md="6">
            <EyebrowHeadline headline="Problem Space" />

            <Heading>
              <>
                Computation is{" "}
                <span className="text-primary-gradient">expensive & time-consuming</span>
                .
              </>
            </Heading>
            {/* <div> */}

            {/* <motion.ul initial="hidden" animate={animation}> */}
            {/* <motion.ul initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once:false, amount:0.5}}
            transition={{delayChildren: 1, staggerChildren:0.5}}> */}
            {/* <motion.li initial={{opacity:0, translateX:50}} whileInView={{ opacity: 1}} animate={{opacity:1, translateX:0}} transition={{ duration:0.5, delay:.5}} > "Computationally intensive tasks like Artificial Intelligence and Machine Learning demand sophisticated CPUs & GPUs which are heavy on the pocket.</motion.li> */}
            {/* <motion.li variants={textAnimate}> Computationally intensive tasks like Artificial Intelligence and Machine Learning demand sophisticated CPUs & GPUs which are heavy on the pocket.</motion.li>
                <motion.li variants={textAnimate}> Alternatively, using cloud computation is expensive as well due to the monopolization of the cloud industry.</motion.li>
                <motion.li variants={textAnimate}> Training using a single GPU can be extremely slow and frustrating.</motion.li> */}
            {/* </motion.ul> */}

            {/* </div> */}
            <ListView
              items={[
                "Computationally intensive tasks like Artificial Intelligence and Machine Learning demand sophisticated CPUs & GPUs which are heavy on the pocket.",
                "Alternatively, using cloud computation is expensive as well due to the monopolization of the cloud industry.",
                "Training using a single GPU can be extremely slow and frustrating.",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProblemSpace;
