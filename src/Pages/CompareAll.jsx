import React from "react";

const CompareAll = () => {
  return (
    <div className="w-full p-4 bg-CustomBlack-3  ">
      <div className="flex flex-col justify-center items-center ">
        <h2 className=" text-[4rem] font-bold text-CustomWhite-1  bg-gradient-to-r from-CustomYellow-1 via-CustomWhite-4 to-CustomYellow-2 inline-block text-transparent bg-clip-text animate-text cursor-pointer ">
          Compare All
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center my-10 overflow-x-auto ">
        <div className="max-w-4xl mx-auto p-6 rounded-lg bg-opacity-10 bg-CustomBlack-2 shadow-md shadow-CustomYellow-1 bg-CustomBlack-2">
          <div className="overflow-x-auto ">
            <table className="w-full text-left text-lg text-CustomYellow-2">
              <thead className="bg-CustomYellow-1 text-CustomBlack-2">
                <tr>
                  <th className="py-3 px-4 font-bold rounded-tl-lg">
                    Specification
                  </th>
                  <th className="py-3 px-4 font-bold">Rhyno SE03 Lite</th>
                  <th className="py-3 px-4 font-bold">Rhyno SE03</th>
                  <th className="py-3 px-4 font-bold rounded-tr-lg">
                    Rhyno SE03 Max
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">Battery</td>
                  <td className="py-3 px-4">1.8Kwh</td>
                  <td className="py-3 px-4">2.7Kwh</td>
                  <td className="py-3 px-4">2.7Kwh</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">Battery features</td>
                  <td className="py-3 px-4">
                    LFP with 1500 cycles
                    <br />
                    Active Balancing
                    <br />
                    Waterproof (IP67)
                  </td>
                  <td className="py-3 px-4">
                    LFP with 1500 cycles
                    <br />
                    Active Balancing
                    <br />
                    Waterproof (IP67)
                  </td>
                  <td className="py-3 px-4">
                    LFP with 1500 cycles
                    <br />
                    Active Balancing
                    <br />
                    Waterproof (IP67)
                  </td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">Battery warranty</td>
                  <td className="py-3 px-4">3 years</td>
                  <td className="py-3 px-4">3 years</td>
                  <td className="py-3 px-4">3 years</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">Charging time</td>
                  <td className="py-3 px-4">3 hours (12A)</td>
                  <td className="py-3 px-4">4 hours (12A)</td>
                  <td className="py-3 px-4">4 hours (12A)</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">Motor</td>
                  <td className="py-3 px-4">1500W</td>
                  <td className="py-3 px-4">1500W</td>
                  <td className="py-3 px-4">2000W</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">Max speed</td>
                  <td className="py-3 px-4">55 km/h</td>
                  <td className="py-3 px-4">55 km/h</td>
                  <td className="py-3 px-4">65 km/h</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">
                    Warranty on electronics
                  </td>
                  <td className="py-3 px-4">1 year</td>
                  <td className="py-3 px-4">1 year</td>
                  <td className="py-3 px-4">1 year</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">
                    Max range (@30km/h)
                  </td>
                  <td className="py-3 px-4">100 km</td>
                  <td className="py-3 px-4">150 km</td>
                  <td className="py-3 px-4">120 km</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">
                    Max range (@45km/h)
                  </td>
                  <td className="py-3 px-4">90 km</td>
                  <td className="py-3 px-4">110 km</td>
                  <td className="py-3 px-4">100 km</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">
                    Max range (@full speed)
                  </td>
                  <td className="py-3 px-4">60 km</td>
                  <td className="py-3 px-4">90 km</td>
                  <td className="py-3 px-4">80 km</td>
                </tr>
                <tr className="hover:bg-CustomBlack-3 transition duration-200">
                  <td className="py-3 px-4 font-semibold">
                    Other key benefits
                  </td>
                  <td className="py-3 px-4">
                    Fire-safe battery
                    <br />
                    Range prediction
                    <br />
                    Comfortable ride
                    <br />
                    Stable and safe
                  </td>
                  <td className="py-3 px-4">
                    Fire-safe battery
                    <br />
                    Range prediction
                    <br />
                    Comfortable ride
                    <br />
                    Stable and safe
                  </td>
                  <td className="py-3 px-4">
                    Fire-safe battery
                    <br />
                    Range prediction
                    <br />
                    Comfortable ride
                    <br />
                    Stable and safe
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareAll;
