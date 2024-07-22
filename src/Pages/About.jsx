import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" flex-col justify-center items-center pt-10 bg-CustomBlack-3 ">
      <h2 className="flex items-center justify-center text-6xl font-bold cursor-pointer mb-10">
        About Us
      </h2>
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg shadow-CustomYellow-1 mt-22 ">
        <p className="text-lg text-CustomYellow-2 leading-relaxed">
          Established in 2019 by an automotive engineer with a vision for
          sustainable and robust mobility solutions,{" "}
          <span className="font-semibold text-CustomYellow-1">Rhyno EV</span> is
          not just a company; it's a collective effort of a dynamic team of
          young individuals passionately driving innovation in the electric
          vehicle industry. We believe in engineering solutions that solve
          problems.
        </p>
        <p className="mt-4 text-lg text-CustomYellow-2 leading-relaxed">
          With our first product, we've taken a bold step to create something
          more than just a vehicle; it's a unique experience of elegance,
          comfort and style, addressing the pitfalls of conventional electric
          scooters. Our design prioritizes safety, eliminating concerns of fires
          and ensuring a longer battery lifespan with our battery technology.
          Perfectly suited for fleet operators, especially in tourist-centric
          locations like Goa, our rugged yet aesthetically appealing scooters
          are engineered for longevity and reliability. Join us as we pioneer a
          new era in sustainable and dependable electric transportation.
        </p>
      </div>

      <div class="mx-auto max-w-screen-2xl px-4 md:px-8 py-10">
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-2 xl:gap-2">
          {/* <!-- image - start --> */}
          <Link
            to="/selite"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/seLite.png"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </Link>
          {/* <!-- image - end -->

            <!-- image - start --> */}
          <Link
            to="/se"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="/se.png"
              loading="lazy"
              alt="Photo by Magicle"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </Link>
          {/* <!-- image - end -->

            <!-- image - start --> */}
          <Link
            to="/semax"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="/seMax.png"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </Link>
          {/* <!-- image - end -->

            <!-- image - start --> */}
          <Link
            to="/compareAll"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/allproducts.png"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </Link>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  );
};

export default About;
