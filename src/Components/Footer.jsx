import React from "react";
import { Link } from "react-router-dom";
import { CiInstagram, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <footer className="bg-CustomWhite-1 dark:bg-CustomBlack-3">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center sm:w-22 sm:h-16  w-20 h-12">
                <img
                  src="../../public/Rhynologo.png"
                  class="w-full h-full object-cover"
                  alt="Rhyno Logo"
                />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-CustomDarkGrey-5 uppercase dark:text-CustomWhite-1">
                  Policies
                </h2>
                <ul className="text-CustomDarkGrey-4 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline hover:text-CustomYellow-1"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline hover:text-CustomYellow-1"
                    >
                      Refund policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-CustomYellow-1"
                    >
                      Website policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-CustomDarkGrey-5 uppercase dark:text-CustomWhite-1">
                  Others
                </h2>
                <ul className="text-CustomDarkGrey-4 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline hover:text-CustomYellow-1"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline hover:text-CustomYellow-1"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-CustomYellow-1"
                    >
                      Career
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-CustomWhite-1 sm:text-center">
              © 2024{" "}
              <Link to="/" class="hover:underline">
                Rhyno
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-CustomWhite-1 hover:text-CustomYellow-1">
                <CiInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/rhyno-wheels/"
                className="text-CustomWhite-1 hover:text-CustomYellow-1 ms-5"
              >
                <CiLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
