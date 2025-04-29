import Styles from "./AboutMe.module.css";
import DownloadCVButton from "./DownloadCVButton";
import { motion } from "framer-motion";

type AboutMeProps = {
  description: string;
  description2: string;
  qualities: string[];
};

const AboutMe = ({ description, description2, qualities }: AboutMeProps) => {
  return (
    <section className={Styles.container}>
      <motion.h2 
        className={Styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className={Styles.textBlock}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className={Styles.description}>{description}</p>
        <p className={Styles.description}>{description2}</p>
      </motion.div>

      <motion.ul 
        className={Styles.inlineQualities}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {qualities.map((quality, index) => (
          <motion.li 
            key={index} 
            className={Styles.inlineQualityItem}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {quality}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <DownloadCVButton />
      </motion.div>
    </section>
  );
};

export default AboutMe;
