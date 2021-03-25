// Styles
import "./Navigation.scss";
// Logo
import logo from "../../../../assets/media/logos/sw_logo.png";
// Router
import { Link } from "react-router-dom";
// Components

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <img src={logo} alt="logo" width="125vh" height="50vh" className="mr-4 my-2" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">
                <div className="nav-link">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <div className="nav-link">About</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list">
                <div className="nav-link">List</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
