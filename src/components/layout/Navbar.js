import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from '../logo/Logo';
import serviceRoutes from '../routing/serviceRoutes';

const LoginModal = styled.a`
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    text-decoration: none;
    color: #000;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Navbar = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-md navbar-light fixed-top" id="nav">
          <Link id="navMenuFont" class="navbar-brand" to="/">
            <Logo />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul id="navMenu" class="navbar-nav m-auto nav-lighter">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown03">
                  {serviceRoutes.map((prop, key)      => {
                    for(var i=key; i < 4; i++){
                      return (
                        <Link class="dropdown-item" to={prop.layout + prop.path}>
                        {prop.name}
                      </Link>
                      )
                    }
                  })}
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown03">
                  <Link class="dropdown-item" to="/mockup-designs">
                    Mock up Designs
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/code-snippets"
                  >
                    Code Snippets
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/open-source"
                  >
                    Open Source
                  </Link>
                  <Link className="dropdown-item" to="/client-projects">
                    Client Projects
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about-us">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link to="/cart" className="nav-link">Cart</Link>
              </li> */}
              <li class="nav-item active">
                <LoginModal
                  id="navMenuFont"
                  class="nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  Login
                </LoginModal>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Navbar };
