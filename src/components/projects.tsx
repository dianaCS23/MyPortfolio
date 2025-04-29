import ProjectCard from "./projectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const projectList = [
    {
      title: "Project 1",
      description: "My first project",
      seconddescription: "Some additional info",
      link: "#",
    },
    {
      title: "Project 2",
      description: "My second project",
      seconddescription: "Some additional info",
      link: "#",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            seconddescription={project.seconddescription}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
