import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-scroll";
import "./Navbar.css";
import AdoxLogo from "./adox-logo.svg";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <a href="https://adox.com.ar">
            <img src={AdoxLogo} alt="Adox SA" className="logo" />
          </a>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.url}
                  smooth={true}
                  duration={1000}
                  offset={-40}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <a className="nav-links" href="https://adox.com.ar/contacto/">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
