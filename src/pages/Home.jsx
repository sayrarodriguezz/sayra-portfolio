import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';



const buttonStyle = (bgColor) => ({
  backgroundColor: bgColor,
  border: '1px solid black',
  borderRadius: '20px',
  padding: '8px 20px',
  fontSize: '0.9rem',
  cursor: 'pointer',
});


function Home() {
    
    const navigate = useNavigate();

  return (
   <div
  style={{
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f2f9f7',
    minHeight: '100vh',
  }}
>
    <Navbar />
      {/* Avatar */}
      <div style={{ marginTop: '40px' }}>
        <img
          src="pictures/myAvatar.png" // replace with your image path
          alt="Sayra Rodriguez"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%', // keeps it circular
            objectFit: 'cover',  // ensures the image covers the circle without distortion
            display: 'block',
            margin: '0 auto',
            border: '2px solid #cfe7e3' // optional: border like before
          }}
        />
    </div>
        {/* Name */}
        <h1 style={{ fontFamily:'Playfair Display, serif', fontSize: '3rem', marginTop: '20px' }}>
            Sayra Rodriguez
        </h1>

        {/* Intro text */}
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            Software Engineer trying to deepen my expertise in React and modern
            front-end frameworks through personal projects. Quick learner with broad
            exposure across UI and embedded systems, now specializing in front-end
            development with a focus on growth and long-term impact.
        </p>

            {/* Buttons */}
        <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={buttonStyle('#f7e7c3')}onClick={() => window.open('https://www.linkedin.com/in/sayra-rodriguez-24718b21b/', '_blank')}>LinkedIn</button>
            <button style={buttonStyle('#cfe1f7')}onClick={() => window.open('https://github.com/sayrarodriguezz', '_blank')}>GitHub</button>
            <button style={buttonStyle('#e6d7f7')}onClick={() => window.open('/sayra-resume.pdf', '_blank')}>Resume</button>
            <button style={buttonStyle('#f7cfe7')} onClick={() => navigate('/about')}>About</button>
            <button style={buttonStyle('#f7d8c7')} onClick={() => navigate('/portfolio')}>Portfolio</button>
        </div>

    </div>


    
  );
}

export default Home;
