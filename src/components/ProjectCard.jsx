import ProjectButton from './ProjectButton';

function ProjectCard({ project }) {
  return (  
    <div
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
        marginTop: '40px',
        transition: 'transform 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div
        style={{
          backgroundColor: project.color,
          width: '300px',
          height: '200px',
          borderRadius: '16px',
          border: '1px solid black',
          overflow: 'hidden',
        }}
        >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
        </div>

      <div style={{ flex: 1 }}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.tech.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>

        {/*Buttons*/}
        <div style={{ marginTop: '10px', marginLeft: '10px', display: 'flex', gap: '10px' }}>
            <ProjectButton
              label="Live Demo"
              href={project.demoVideo || project.demoLink} // uses video if present, otherwise link
              bgColor={project.color}
            />
          <ProjectButton
            label="GitHub"
            href= {project.githubLink}
            bgColor={project.color}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
