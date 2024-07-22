import React, { useState } from "react";
import { motion } from "framer-motion";

const SELite = () => {
  const [selectedColor, setSelectedColor] = useState("green");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className=" bg-CustomBlack-3 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[8rem] font-bold text-CustomWhite-1  bg-gradient-to-r from-CustomYellow-1 via-CustomWhite-4 to-CustomYellow-2 inline-block text-transparent bg-clip-text animate-text cursor-pointer">
          SE03 Lite
        </h1>
        <motion.div
          className="max-w-4xl mx-auto p-6 rounded-lg shadow-xl mt-10"
          initial={{ boxShadow: "0 0 0 rgba(255, 223, 0, 0.4)" }}
          animate={{
            boxShadow: [
              "0 0 30px rgba(255, 223, 0, 0.4)",
              "0 0 50px rgba(255, 223, 0, 0.7)",
              "0 0 30px rgba(255, 223, 0, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
         Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 1500W motor and a 1.8kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
        </motion.div>

        <div className="flex flex-col md:flex-row mt-20">
          <div className="md:w-1/2 p-4 flex items-center justify-center md:justify-start md:items-start">
            <img
              src="/seLite.png"
              alt="SE03 image"
              className="h-auto w-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-4 mb-20 bg-CustomBlack-2 shadow-md shadow-CustomYellow-1 mx-4">
            <div className="flex flex-col justify-center items-center ">
              <div className="max-w-4xl mx-auto p-6 rounded-lg   bg-opacity-10">
                <table className="w-full text-left text-lg text-CustomYellow-2">
                  <tbody>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">Specification</td>
                      <td className="py-2 px-4">Rhyno SE03</td>
                    </tr>
                    <tr className="border-gray-700">
                      <td className="py-2 px-4 font-semibold">
                        Warranty on electronics
                      </td>
                      <td className="py-2 px-4">1 year</td>
                    </tr>
                    <tr className="border-gray-700">
                      <td className="py-2 px-4 font-semibold">Battery</td>
                      <td className="py-2 px-4">1.8Kwh</td>
                    </tr>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">
                        Battery warranty
                      </td>
                      <td className="py-2 px-4">3 Years</td>
                    </tr>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">Charging time</td>
                      <td className="py-2 px-4">3 hours (12A)</td>
                    </tr>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">Motor</td>
                      <td className="py-2 px-4">1500W</td>
                    </tr>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">Max speed</td>
                      <td className="py-2 px-4">50 km/h</td>
                    </tr>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">
                        Warranty on electronics
                      </td>
                      <td className="py-2 px-4">1 year</td>
                    </tr>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">
                        Max range (@30km/h)
                      </td>
                      <td className="py-2 px-4">100 km</td>
                    </tr>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">
                        Max range (@45km/h)
                      </td>
                      <td className="py-2 px-4">90 km</td>
                    </tr>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">
                        Max range (@full speed)
                      </td>
                      <td className="py-2 px-4">70 km</td>
                    </tr>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">
                        Other key benefits
                      </td>
                      <td className="py-2 px-4">
                        Fire-safe battery
                        <br />
                        Range prediction
                        <br />
                        Comfortable ride
                        <br />
                        Stable and safe
                      </td>
                    </tr>
                    <tr className=" border-gray-700">
                      <td className="py-2 px-4 font-semibold">
                        Battery features
                      </td>
                      <td className="py-2 px-4">
                        LFP with 1500 cycles
                        <br />
                        Active Balancing
                        <br />
                        Comfortable ride
                        <br />
                        Waterproof (IP67)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Color Selection */}
        <div className="flex sm:flex-row flex-col  mb-20 gap-2 ">
          <h2>Choose the colour : </h2>
          <label className="inline-flex items-center mr-6">
            <input
              type="radio"
              name="color"
              value="green"
              checked={selectedColor === "green"}
              onChange={() => handleColorChange("green")}
              className="form-radio text-green-500"
            />
            <span className="ml-2 text-CustomYellow-2">Green</span>
          </label>
          <label className="inline-flex items-center mr-6">
            <input
              type="radio"
              name="color"
              value="blue"
              checked={selectedColor === "blue"}
              onChange={() => handleColorChange("blue")}
              className="form-radio text-blue-500"
            />
            <span className="ml-2 text-CustomYellow-2">Blue</span>
          </label>
          <label className="inline-flex items-center mr-6">
            <input
              type="radio"
              name="color"
              value="yellow"
              checked={selectedColor === "yellow"}
              onChange={() => handleColorChange("yellow")}
              className="form-radio text-yellow-500"
            />
            <span className="ml-2 text-CustomYellow-2">Yellow</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="color"
              value="red"
              checked={selectedColor === "red"}
              onChange={() => handleColorChange("red")}
              className="form-radio text-red-500"
            />
            <span className="ml-2 text-CustomYellow-2">Red</span>
          </label>
        </div>

        <span class="relative ml-4 inline-block text-sm text-white md:ml-5 md:text-lg  rounded-md hover:text-CustomYellow-2 hover:bg-CustomDarkGrey-1 bg-CustomDarkGrey-3 cursor-pointer p-4 mb-20">
          Buy SE03 Lite
        </span>
      </div>
    </div>
  );
};

export default SELite;
