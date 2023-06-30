// import "../Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";


function Header() {


  return (
    <div className="navbar">

      <div style={{ textAlign: "center" }}>
        <ButtonGroup variant="text" aria-label="text primary button group">
          <Button>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
              to="/"
            >
              {" "}
              Home
            </NavLink>
          </Button>

          <Button>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
              to="/access"
            >
              {" "}
              Accessibility
            </NavLink>
          </Button>

          <Button>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
              to="/env"
            >
              {" "}
              Environment
            </NavLink>
          </Button>

        
        </ButtonGroup>
      </div>

    </div>
  );
}

export default Header;
