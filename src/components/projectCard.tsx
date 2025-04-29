import styles from "./ProjectCard.module.css";

type ProjectProps = {
  title: string;
  description: string;
  link: string;
  seconddescription: string;
};

const ProjectCard = ({ title, description, link, seconddescription }: ProjectProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.description}>{seconddescription}</p>
      <a
        className={styles.button}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
