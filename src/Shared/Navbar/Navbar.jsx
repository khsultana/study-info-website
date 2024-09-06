import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="lg:hidden sm:block navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="font-sans font-semibold">Home </a>
              </li>
              <li>
                <a>About </a>
              </li>
              <li>
                <a>Gallery </a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-start">
          <a className=" text- btn btn-ghost text-xl text-orange-700 ">
            Study <span className="text-green-800">Info</span>
          </a>
        </div>
        <div className="navbar-end">
          <div className="lg:block hidden">
            <button className="mr-3 font-sans font-semibold">Home</button>
            <button className="mr-3">About</button>
            <button className="mr-3">Gallery</button>
            <button className="mr-3">Portfolio</button>
          </div>

          <button className="btn btn-outline btn-success">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
