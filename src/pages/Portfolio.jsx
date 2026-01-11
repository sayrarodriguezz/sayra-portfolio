import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
const projects = [
    {
      title: 'Budgeting App',
      description: 'A web app that helps users manage monthly income, expenses, and savings goals.',
      tech: ['React', 'Context API', 'Chart.js'],
      color: '#f7e7c3',
      image: 'Projects/BudgetingApp/Dashboard-Page.JPG',
      githubLink: 'https://github.com/jasmine-pok/budgeting-proj',
      demoVideo: 'Projects/BudgetingApp/Budgeting101-demo.mp4',
      //demoLink: 
    },
    {
      title: 'UI Systems Dashboard',
      description: 'A mock industrial dashboard that visualizes system data in a clean, modern interface.',
      tech: ['D3.js', 'JavaScript', 'Reusable Components'],
      color: '#cfe1f7',
    },
    {
      title: 'Design Experiments',
      description: 'A collection of small UI experiments inspired by Pinterest, Canva, and modern interfaces.',
      tech: ['CSS Animations', 'Layout Experiments', 'Creative UI'],
      color: '#e6d7f7',
    },
  ];
  return (
       <div style={{ padding: '40px', backgroundColor: '#f2f9f7', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>My Projects</h1>

        {projects.map((project, index) => (
         <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
