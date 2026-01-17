import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const buttonStyle = (bgColor) => ({
  backgroundColor: bgColor,
  border: '1px solid black',
  borderRadius: '20px',
  padding: '8px 20px',
  fontSize: 'clamp(1.2rem, 1.5vw, 2rem)',
  fontFamily: 'Playfair Display, serif',
  cursor: 'pointer',
});

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#f2f9f7',
        minHeight: '100vh',
      }}
    >
      <Navbar />
        {/* Wrapper to center the whole block */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>

      {/* Main content flex container */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginTop: '40px' }}>
        {/* Left: Avatar */}
        <div style={{ position: 'relative', marginTop: '85px' }}>
          <img
            src="pictures/myAvatar.png"
            alt="Sayra Rodriguez"
            style={{
              width: 'clamp(180px, 12vw, 400px)',   // scales with screen, min: current size, max: larger
              height: 'clamp(180px, 12vw, 400px)',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #cfe7e3',
            }}
          />

          {/* Name overlapping the image */}
          <h1
            style={{
              position: 'absolute',
              top: '-15%', // vertical alignmet relative to the image
              left: '210%', // overlap slightly to the right
              transform: 'translate(-50%,-50%)', // centers the name over the overlap
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(4rem, 4vw, 8rem)',
              fontWeight: 'bold',
              color: '#222',
              whiteSpace: 'nowrap'
            }}
          >
            Sayra Rodriguez
          </h1>
        </div>

        {/* Right: About + location + buttons */}
        <div style={{ maxWidth: 'clamp(600px, 40vw, 900px)', marginTop: '130px' }}>
          <p style={{ fontFamily: 'Merriweather, serif',fontSize: 'clamp(1rem, 1.2vw, 2rem)', lineHeight: '1.5',ustifyContent: 'flex-start', marginLeft: '-30px', marginTop: '20px' }}>
            Software Engineer specializing in React and modern front-end frameworks, with hands-on experience built through personal projects.
            Quick learner with broad exposure across UI and embedded systems, now focused on front-end development with an emphasis on growth, usability, and long-term impact.
          </p>
          
          <p style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(0.9rem, 1vw, 1.3rem)', lineHeight: '1.4', marginLeft: '-30px', marginTop: '10px',color: '#444'}}>
            <span style={{ fontSize: 'clamp(1.1rem, 1.2vw, 2rem)' }}> 🏡 </span> 
            <span style={{ fontStyle: 'italic' }}> Houston, TX • Open to remote and hybrid opportunities </span>
          </p>

        <div style={{ marginTop: '40px', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'flex-start', marginLeft: '-170px' }}>
          <button style={buttonStyle('#f7e7c3')} onClick={() => window.open('https://www.linkedin.com/in/sayra-rodriguez-24718b21b/', '_blank')}>LinkedIn</button>
          <button style={buttonStyle('#cfe1f7')} onClick={() => window.open('https://github.com/sayrarodriguezz', '_blank')}>GitHub</button>
          <button style={buttonStyle('#e6d7f7')} onClick={() => window.open('/sayra-resume.pdf', '_blank')}>Resume</button>
          <button style={buttonStyle('#f7cfe7')} onClick={() => navigate('/about')}>About</button>
          <button style={buttonStyle('#f7d8c7')} onClick={() => navigate('/portfolio')}>Portfolio</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
