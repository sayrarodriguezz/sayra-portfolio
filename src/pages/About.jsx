import Navbar from '../components/Navbar';
import Pill from '../components/Pill';

function About() {
return (
    <div style={{ padding: '40px', backgroundColor: '#f2f9f7', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
        <h1 style={{ fontFamily:'Playfair Display, serif', fontSize: '4rem', marginTop: '20px'}}>
          About Me
        </h1>

        {/* Who I Am */}
        <section style={{ marginTop: '40px' }}>
          <Pill color="#f7e7c3">WHO I AM</Pill>
          <p style={{ fontFamily:'Merriweather, serif', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            I’m a front-end engineer focused on building clean, thoughtful user interfaces.
I currently work on a UI systems team, where I collaborate on modern JavaScript-based interfaces and component-driven development.
          </p>
        </section>

        {/* What Inspires My Design */}
        <section style={{ marginTop: '40px' }}>
          <Pill color="#cfe1f7">WHAT INSPIRES MY DESIGN</Pill>
          <p style={{ fontFamily:'Merriweather, serif', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
           Outside of engineering, I find inspiration from Pinterest, Canva designs, drawing, coffee shops,
            and everyday aesthetics. These influences show up in my work through attention to layout, color, hierarchy, and interaction details.
          </p>
        </section>

        {/* Technical Strengths */}
        <section style={{ marginTop: '40px' }}>
          <Pill color="#e6d7f7">TECHNICAL STRENGTHS</Pill>
          <ul style={{ fontFamily:'Merriweather, serif', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            <li>React & JavaScript</li>
            <li>HTML & CSS</li>
            <li>UI Component Design</li>
            <li>Data Visualization</li>
            <li>D3.js & Chart.js</li>
            <li>Frontend Architecture</li>
          </ul>
        </section>

        {/* My Journey */}
        <section style={{ marginTop: '40px' }}>
          <Pill color="#f7cfe7">MY JOURNEY</Pill>
          <p style={{ fontFamily:'Merriweather, serif', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
           I began my career through a rotation program, gaining exposure to embedded systems and UI development before specializing in front-end work.
           This background helps me think holistically about how interfaces connect to underlying systems.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
