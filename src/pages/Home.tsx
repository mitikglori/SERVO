import logo from '../assets/logo_full.png';
import '../App.css';

const HomePage = () => {
  return (
    <div className="container mt-5 text-center">
      <img src={logo} alt="SERVO ROCKETRY Logo" className="hero-logo float" />
      <div className="hero-text fade-in">
        <h1>Welcome to SERVO ROCKETRY</h1>
        {/* <p className="lead">The sky is not the limit, it's just the beginning.</p> */}
      </div>
    </div>
  );
};

export default HomePage;
