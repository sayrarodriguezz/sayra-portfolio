function ProjectButton({ label, href, bgColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: '6px 16px',
        borderRadius: '20px',
        border: '1px solid black',
        backgroundColor: 'transparent',
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.85rem',
        textDecoration: 'none',
        color: '#000',
        transition: 'all 0.25s ease',
        marginRight: '10px',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = bgColor;
        e.target.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.transform = 'translateY(0)';
      }}
    >
      {label}
    </a>
  );
}

export default ProjectButton;
