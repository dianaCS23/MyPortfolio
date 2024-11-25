import Styles from "./AboutMe.module.css";

type AboutMeProps = {
  description: string;
  description2: string;
  qualities: string[];
};

const AboutMe = ({ description, description2, qualities }: AboutMeProps) => {
  return (
    <section className={Styles.container}>
      <h2 className={Styles.title}>About Me</h2>
      <p className={Styles.description}>{description}</p>
      <p className={Styles.description}>{description2}</p>
      <ul className={Styles.qualitiesList}>
        {qualities.map((quality, index) => (
          <li key={index} className={Styles.qualityItem}>
            {quality}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutMe;
