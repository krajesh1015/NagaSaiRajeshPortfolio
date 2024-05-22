import { ProjectCard, ProjectDescription, ProjectImage, ProjectTitle } from "./components/style";

const Project = ({ project, language }) => {
  return (
    <ProjectCard>
      <ProjectImage src={project.img} />
      <div className="project-hover">
        <ProjectTitle>{project.title}</ProjectTitle>

      <ProjectDescription>
        {project.subtitle[language]}
      </ProjectDescription>

      </div>
    </ProjectCard>
  );
};

export default Project;
