import logo from '../assets/logo_full.png';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#home" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="SERVO ROCKETRY" className="d-inline-block align-top navbar-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team" onClick={() => scrollToSection('team')}>Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
