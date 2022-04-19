import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HomeRounded } from "@material-ui/icons";
import Details from "../../utils/resumeData";
import CustomButton from "../Buttons/CustomButton";
import TelegramIcon from "@material-ui/icons/Telegram";

function Header(props) {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" className="header">
      <Nav.Link as={NavLink} to="/" className="header_brand">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">      
          <Nav.Link
            as={NavLink}
            to="/resume"
            className={pathName == "/resume" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName == "/contact" ? "header_link_active" : "header_link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(Details.socials).map((key) => {
            return (
              <a href={Details.socials[key].link} target="_blank" key={key}>
                {Details.socials[key].icon}
              </a>
            );
          })}
          <CustomButton text={"Hire Me"} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
