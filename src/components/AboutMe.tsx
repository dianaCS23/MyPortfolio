import Styles from "./AboutMe.module.css";

type AboutMeProps = {
  description: string;
};

const AboutMe = ({ description }: AboutMeProps) => {
  return (
    <section className={Styles.container}>
      <h2 className={Styles.title}>About Me</h2>
      <p className={Styles.description}>{description}</p>
    </section>
  );
};

export default AboutMe;
