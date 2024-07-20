import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenu] = useState(false);
  const [isProductMenuFull, setIsProductMenuFull] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuIcons=()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  const toggleProductMenu=()=>{
    setIsProductMenu(!isProductMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  }
  const toggleOffAllMenu=()=>{
    setIsProductMenu(false);
    setIsMenuOpen(false);
    setIsProductMenuFull(false);
  }

  const toggleProductsMenuFullView=()=>{
    setIsProductMenuFull(!isProductMenuFull);
  }

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-CustomBlack-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center w-22 h-16">
            <img
              src="../../public/Rhynologo.png"
              className="w-full h-full object-cover"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex flex-col items-center">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-CustomDarkGrey-1 rounded-lg md:hidden hover:bg-CustomWhite-1 focus:outline-none focus:ring-2 focus:ring-CustomWhite-2 dark:text-CustomWhite-4 dark:hover:bg-CustomDarkGrey-1 dark:focus:ring-CustomDarkGrey-5"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          </div>
         
          <div className="hidden w-full md:block md:w-auto" id="">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-CustomWhite-3 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-CustomDarkGrey-1">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-CustomWhite-1 bg-blue-700 rounded md:bg-transparent md:text-CustomYellow-1 md:p-0 dark:text-CustomWhite-1 md:dark:text-CustomYellow-1"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-CustomDarkGrey-5 rounded hover:bg-CustomWhite-1 md:hover:bg-transparent md:border-0 md:hover:text-CustomYellow-1 md:p-0 dark:text-white md:dark:hover:text-CustomYellow-1 dark:hover:bg-CustomDarkGrey-4 dark:hover:text-CustomWhite-1 md:dark:hover:bg-transparent"
                >
                  About Us
                </Link>
              </li>
              <li>
                <div
                  className="block py-2 px-3 text-CustomDarkGrey-5 rounded hover:bg-CustomWhite-1 md:hover:bg-transparent md:border-0 md:hover:text-CustomYellow-1 md:p-0 dark:text-white md:dark:hover:text-CustomYellow-1 dark:hover:bg-CustomDarkGrey-4 dark:hover:text-CustomWhite-1 md:dark:hover:bg-transparent cursor-pointer" onClick={toggleProductsMenuFullView}
                >
                  Products
                </div>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="block py-2 px-3 text-CustomDarkGrey-5 rounded hover:bg-CustomWhite-1 md:hover:bg-transparent md:border-0 md:hover:text-CustomYellow-1 md:p-0 dark:text-white md:dark:hover:text-CustomYellow-1 dark:hover:bg-CustomDarkGrey-4 dark:hover:text-CustomWhite-1 md:dark:hover:bg-transparent"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/prebook"
                  className="block py-2 px-3 text-CustomDarkGrey-5 rounded hover:bg-CustomWhite-1 md:hover:bg-transparent md:border-0 md:hover:text-CustomYellow-1 md:p-0 dark:text-white md:dark:hover:text-CustomYellow-1 dark:hover:bg-CustomDarkGrey-4 dark:hover:text-CustomWhite-1 md:dark:hover:bg-transparent"
                >
                  Prebook now
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden `} id="navbar-default">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1 " onClick={toggleMenuIcons}>Home</Link>
          <Link to="/about" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1" onClick={toggleMenuIcons}>About Us</Link>
          <div to="" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1 cursor-pointer" onClick={toggleProductMenu}>Products</div>
          <Link to="/contactus" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1" onClick={toggleMenuIcons}>Contact Us</Link>
          <Link to="/prebook" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1" onClick={toggleMenuIcons}>PreBook Now</Link>
        </div>
      </div>

        <div className={`${isProductMenuOpen ? 'block' : 'hidden'} md:hidden `} id="navbar-default">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/se" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1 " onClick={toggleOffAllMenu}>SE03 Lite</Link>
          <Link to="/semax" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1" onClick={toggleOffAllMenu}>SE03</Link>
          <Link to="/selite" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1" onClick={toggleOffAllMenu}>SE03 Max</Link>
          <Link to="/compareAll" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1" onClick={toggleOffAllMenu}>Compare All</Link>
        </div>
      </div>

      <div className={`${isProductMenuFull ? 'block' : 'hidden'}`} id="navbar-default z-10">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/se" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1 " onClick={toggleOffAllMenu}>SE03 Lite</Link>
          <Link to="/semax" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1" onClick={toggleOffAllMenu}>SE03</Link>
          <Link to="/selite" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1" onClick={toggleOffAllMenu}>SE03 Max</Link>
          <Link to="/compareAll" className="text-CustomWhite-1 block px-3 py-2 rounded-md text-base font-medium dark:hover:text-CustomYellow-1" onClick={toggleOffAllMenu}>Compare All</Link>
        </div>
      </div>

      </nav>
    </div>
  );
}; 

export default Navbar;
