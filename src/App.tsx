import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import TeamPage from './pages/Team';
import ProjectsPage from './pages/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="team">
        <TeamPage />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
    </div>
  );
}

export default App;
