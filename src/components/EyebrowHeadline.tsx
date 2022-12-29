// Eyebrow Headline

// Read More:
// https://uxmovement.com/content/increasing-headline-clicks-with-eyebrow-text/

import {motion} from "framer-motion";

const sentence ={
    hidden:{ opacity:1},
    visible:{
      opacity:1, transition:{
        delay:0.5, staggerChildren:0.08
      }
    }
  }
  
  const letter ={
    hidden: {opacity:0,y:50},
    visible:{
      opacity:1, y:0
    }
  }

type EyebrowHeadlineProps = {
    headline: string,
    className?: string
}



const EyebrowHeadline = ({ headline, className = "" }: EyebrowHeadlineProps) => {
    return (

        <motion.div variants={sentence} initial="hidden" whileInView="visible"> 
           {
            headline.split("").map((char,index)=>{
              return(
                <motion.span className={`eyebrow text-primary text-uppercase fw-bold ${className}`} style={{ fontSize: "17px" }} key={char+"-"+index} variants={letter}>{char}</motion.span> 
              )
            })
           }
           </motion.div>
    );
}

export default EyebrowHeadline;