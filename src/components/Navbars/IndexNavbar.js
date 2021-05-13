import React from "react";

import classnames from "classnames";
import { Link } from "react-router-dom";


// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
      <Navbar       
        className={classnames("fixed-top", navbarColor)}
        color-on-scroll="300"
        expand="lg"
      >
        <Container>
        <NavbarBrand
            data-placement="bottom"
            to="/index"
            title="homepage"
            tag={Link}
          >
            Eternium
          </NavbarBrand>
          <button
            className="navbar-toggler"
            id="navbarNavDropdown"
            type="button"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setBodyClick(true);
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
            <Nav className="ml-auto mt-2 mt-lg-0" navbar >
              <NavItem >
                <NavLink to="/rules" tag={Link}>
                  Rules 
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink to="/events" tag={Link}>
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/forum" tag={Link}>
                  Forum
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="/login"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  Login
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem
                    to="/login" tag={Link}
                  >
                    Login
                  </DropdownItem>
                  <DropdownItem
                    to="/register" tag={Link}
                  >
                    Register
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Something else here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar