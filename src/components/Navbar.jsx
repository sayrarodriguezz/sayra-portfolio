import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PORTFOLIO', path: '/portfolio' }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
     {/* Header */}
      <h1 style={{ margin: '0 10px' }}></h1>
      
     {/* Navbar container with full width background */}
      <nav style={{ 
          backgroundColor: '#d3ebe4',
          padding: '10px 20px',
          borderRadius: '24px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
          position: 'sticky',
          top: '20px',
          marginLeft: 'auto',
          zIndex: 10,
      }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              style={{
                textDecoration: 'none',
                margin: '0 10px',
                fontWeight: isActive ? 'bold' : 'normal',
                fontFamily: 'Inter, sans-serif',
                padding: '5px 10px',
                color: '#000',
                borderRadius: '16px',
                transition: 'all 0.25s ease',
              }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#c1e3d9';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = isActive ? '#b0dbce' : 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
