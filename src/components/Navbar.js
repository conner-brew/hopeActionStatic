import { Link } from 'react-router-dom'
import brandImage from '../images/HA_color.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={brandImage} alt="HopeAction" height="50px" width="100px"/>
          <span className="navbarText">HopeAction</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="aboutUsDropdown" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us </a>
              <ul className="dropdown-menu" aria-labelledby="aboutUsDropdown">
                <li><Link className="dropdown-item" to="/mission">Our Mission</Link></li>
                <li><Link className="dropdown-item" to="/team">Our Team</Link></li>
                <li><Link className="dropdown-item" to="/programs">Our Programs</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="getInvolvedDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">Get Involved </a> 
              <ul className="dropdown-menu" aria-labelledby="getInvolvedDropdown">
                <li><a className="dropdown-item" href="https://signup.com/go/vMPDRwB" target="_blank" rel="noreferrer">Volunteer</a></li>
                <li><Link className="dropdown-item" to="/donate">Donate</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar