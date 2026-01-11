import ProjectButton from './ProjectButton';

function ProjectCard({ project }) {
  return (  
    <div
      style={{
        display: 'flex',
        gap: 'clamp(20px, 2vw, 40px)', // gap scales with screen
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
          width: 'clamp(400px, 20vw, 500px)',
          height: 'clamp(300px, 12vw, 400px)',
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
        <h3 style = {{fontFamily: 'Playfair Display, serif', fontSize:  'clamp(2rem, 2vw, 3rem)' }}>
          {project.title}
        </h3>
        <p style={{ fontFamily:'Merriweather, serif', maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(1rem, 1.2vw, 1.5rem)' }}>
          {project.description}
        </p>
        <ul style={{ fontFamily:'Merriweather, serif', maxWidth: '600px', margin: '0 auto',marginTop:'20px', fontSize: 'clamp(1rem, 1.2vw, 1.5rem)' }}>
          {project.tech.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>

        {/*Buttons*/}
        <div style={{ marginTop: '20px', marginLeft: '10px', display: 'flex', gap: '10px' }}>
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
