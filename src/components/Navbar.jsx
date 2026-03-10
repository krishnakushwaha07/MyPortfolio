import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const isActiveLink = ({ isActive }) =>
    isActive ? { color: "blue" } : { color: "black" };

  const handleNavClick = () => {
    setMenu((pre) => {
      if (pre === true) return false;
    });
  };

  return (
    <header className="bg-gray-100 h-12 flex  items-center justify-center">
      <nav className="flex justify-around p-5 items-center w-[90%] relative">
        <p className="font-semibold">Krishna Kushwaha</p>
        <ul
          className={`${menu ? "w-screen absolute top-13 flex flex-col gap-4 bg-blue-100 rounded-xs h-50 justify-center items-center z-50" : "gap-7 hidden sm:flex"}`}
        >
          <li>
            <NavLink
              to="/"
              style={isActiveLink}
              className="font-semibold"
              onClick={handleNavClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={isActiveLink}
              className="font-semibold"
              onClick={handleNavClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              style={isActiveLink}
              className="font-semibold"
              onClick={handleNavClick}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              style={isActiveLink}
              className="font-semibold"
              onClick={handleNavClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="sm:hidden z-50">
          <button onClick={() => setMenu(!menu)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
