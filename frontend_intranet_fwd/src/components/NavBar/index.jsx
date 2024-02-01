import { Link } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../logo";

const Navigation = () => {
  const role = localStorage.getItem("role");

  // Obtener el enlace actual
  const currentPath = window.location.pathname;

  // Obtener todos los enlaces de la barra de navegación
  const navLinks = document.querySelectorAll(".navbar__link");

  // Iterar sobre los enlaces y agregar la clase "active" al enlace correspondiente
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  return (
    <div className="container-nav">
      <nav className="navbar">
        <Logo className="navbar__logo" />
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} id="drop-to-hide" className="bg-body-gray mb-3">
            <Container fluid>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className="body-offcanvas"
              >
                <Offcanvas.Header >
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Offcanvas.Header closeButton className="title-offcanvas" >Pages</Offcanvas.Header>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <ul className="navbar__list-drop ul-drop">
                      <div className="links-home-drop">
                        <Link to="/home" className="navbar__link-drop li-drop">
                          <h5 className="title-h5">Home</h5>
                        </Link>
                      </div>
                      <div className="links-home-drop">
                        <Link
                          to="/profile"
                          className="navbar__link-drop li-drop"
                        >
                          <h5 className="title-h5"> Profile </h5>
                        </Link>
                      </div>
                      {role === "admin" && (
                        <div className="links-home-drop">
                          <Link
                            to="/users"
                            className="navbar__link-drop li-drop"
                          >
                            <h5 className="title-h5">Users</h5>
                          </Link>
                        </div>
                      )}
                      <div className="links-home-drop">
                        <Link
                          to="/communications"
                          className="navbar__link-drop li-drop"
                        >
                          <h5 className="title-h5">Communications</h5>
                        </Link>
                      </div>
                      <div className="links-home-drop">
                        <Link
                          to="/regulations"
                          className="navbar__link-drop li-drop"
                        >
                          <h5 className="title-h5">Regulations</h5>
                        </Link>
                      </div>

                      <div className="links-home-drop">
                        <Link
                          to="/calendars"
                          className="navbar__link-drop li-drop"
                        >
                          <h5 className="title-h5">Calendars</h5>
                        </Link>
                      </div>

                      <div className="links-home-drop">
                        <Link
                          to="/admonitions"
                          className="navbar__link-drop li-drop"
                        >
                          <h5 className="title-h5">Admontions</h5>
                        </Link>
                      </div>

                      <div className="links-home-drop">
                        <Link
                          to="/justifications"
                          className="navbar__link-drop li-drop"
                        >
                         <h5 className="title-h5">
                            Justifications
                          
                         </h5>
                        </Link>
                      </div>

                      <div className="links-home-drop">
                        <Link
                          to="/announcements"
                          className="navbar__link-drop li-drop"
                        >
                       <h5 className="title-h5">
                            Announcements
                       </h5>
                        </Link>
                      </div>

                      <div className="links-home-drop">
                        <Link
                          to="/DocumentsStorage"
                          className="navbar__link-drop li-drop"
                        >
                    <h5 className="title-h5">
                          Documents
                    </h5>
                        </Link>
                      </div>
                    </ul>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}{" "}
        {/* Agregar el componente de Logo */}
      </nav>
      <ul className="navbar__list ul">
        <div className="links-home">
          <Link to="/home" className="navbar__link li home">
            Home
          </Link>
        </div>
        <div className="links-home">
          <Link to="/profile" className="navbar__link li">
            Profile
          </Link>
        </div>
        {role === "admin" && (
          <div className="links-home">
            <Link to="/users" className="navbar__link li">
              Users
            </Link>
          </div>
        )}
        <div className="links-home">
          <Link to="/communications" className="navbar__link li">
            Communications
          </Link>
        </div>
        <div className="links-home">
          <Link to="/regulationDocuments" className="navbar__link li">
            Regulations
          </Link>
        </div>

        <div className="links-home">
          <Link to="/calendars" className="navbar__link li">
            Calendars
          </Link>
        </div>

        <div className="links-home">
          <Link to="/admonitions" className="navbar__link li">
            Admontions
          </Link>
        </div>

        <div className="links-home">
          <Link to="/justifications" className="navbar__link li">
            Justifications
          </Link>
        </div>

        <div className="links-home">
          <Link to="/announcements" className="navbar__link li">
            Announcements
          </Link>
        </div>

        <div className="links-home">
          <Link to="/DocumentsStorage" className="navbar__link li document">
            Documents
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
