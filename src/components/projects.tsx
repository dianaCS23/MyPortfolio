import ProjectCard from "./projectCard";

const Projects = () => {
  const projectList = [
    {
      title: "Project 1",
      description: "Mi first Project",
      seconddescription: "second description",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Mi second project",
      seconddescription: "second description",
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projectList.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          seconddescription={project.seconddescription}
          link={project.link}
        />
      ))}
    </section>
  );
};

export default Projects;
