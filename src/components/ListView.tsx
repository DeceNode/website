import { motion } from "framer-motion";

type ListViewProps = {
  icon?: JSX.Element;
  items: string[];
  className?: string;
  delay?: number;
};

let textAnimate = {};

const ListView = ({ items, icon, delay, className = "", }: ListViewProps) => {
  if (delay === 4) {
    textAnimate = {
      offscreen: { opacity: 0, x: -100, },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          staggerChildren: 0.2, delay: 0.6, type: "spring",
          bounce: 0.2, ease: "easeInOut"
        }
      }
    }
  }

  else {
    textAnimate = {
      offscreen: { opacity: 0, x: -100, },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring", staggerChildren: 0.2,
          bounce: 0.2, ease: "easeInOut"
        }
      }
    }
  }


  // }

  return (



    <motion.ul initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.2 }} className={icon && "list-unstyled"}>
      {items.map((item, index) => (
        <motion.li variants={textAnimate} className={`mb-3 ${icon && "d-flex align-items-center gap-2"} ${className}`} key={index}>
          {icon}
          {item}
        </motion.li>
      ))}
    </motion.ul>

  );
};

export default ListView;
