import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const words = ["Elegance", "Minimalism", "Comfort"];

  const [currentWord, setCurrentWord] = useState(words[0]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <div className="flex flex-col sm:flex-row bg-CustomBlack-3 ">
      <div className="sm:w-1/2 flex px-4 my-auto">
        <h2 className="text-CustomWhite-1  md:text-xl lg:text-5xl font-light bg-gradient-to-r from-CustomYellow-1 via-CustomWhite-4 to-CustomYellow-2 inline-block text-transparent bg-clip-text animate-text">
          Let's Elevate Your Ride Experience With Rhyno – Where Superiority
          Meets Style. <span className="font-bold ">{currentWord}</span>
        </h2>
      </div>
      <div class=" pb-6 sm:w-1/2">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-2 xl:gap-2">
            {/* <!-- image - start --> */}
            <Link
              to="/selite"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="../../public/seLite.png"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg p-2 rounded-md hover:text-CustomYellow-2 hover:bg-CustomDarkGrey-1">
                SE03 Lite
              </span>
            </Link>
            {/* <!-- image - end -->

            <!-- image - start --> */}
            <Link
              to="/se"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="../../public/se.png"
                loading="lazy"
                alt="Photo by Magicle"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg p-2 rounded-md hover:text-CustomYellow-2 hover:bg-CustomDarkGrey-1">
                SE03
              </span>
            </Link>
            {/* <!-- image - end -->

            <!-- image - start --> */}
            <Link
              to="/semax"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="../../public/seMax.png"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg p-2 rounded-md hover:text-CustomYellow-2 hover:bg-CustomDarkGrey-1">
                SE03 Max
              </span>
            </Link>
            {/* <!-- image - end -->

            <!-- image - start --> */}
            <Link
              to="/compareAll"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="../../public/allproducts.png"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg p-2 rounded-md hover:text-CustomYellow-2 hover:bg-CustomDarkGrey-1">
                Compare All
              </span>
            </Link>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
