import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-3xl items-center justify-between p-4 font-mono">
      <Link to="/">
        <img src="/gyancodes.svg" className="h-8" alt="gyancodes" />
      </Link>
      <ul className="flex items-center gap-4">
        <li>
          <a
            href="#about"
            className=" hover:border-b-4 hover:border-black hover:transition-all	"
          >
            about
          </a>


        </li>
        <li>
        <a
            href="#skills"
            className=" hover:border-b-4 hover:border-black hover:transition-all	"
          >
            skills
          </a>

        </li>
        {/* <li>
          <Link
            to="/about"
            className=" hover:border-b-4 hover:border-black hover:transition-all	"
          >
            projects
          </Link>
        </li> */}
      </ul>
    </header>
  );
};

export default Header;

