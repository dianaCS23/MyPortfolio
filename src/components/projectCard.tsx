type Projects = {
  title: string;
  description: string;
  link: string;
  seconddescription: string;
};

const ProjectCard = ({
  title,
  description,
  link,
  seconddescription,
}: Projects) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{seconddescription}</p>
      <a href={link} target="_blank" rel="noopener noreferrer"></a>
    </div>
  );
};

export default ProjectCard;
