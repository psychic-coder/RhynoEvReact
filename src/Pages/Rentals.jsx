import { FaAndroid, FaApple } from 'react-icons/fa';

export default function Rentals() {
  return (
    <div className="bg-CustomBlack-3 pb-10">

    <div className="flex flex-col items-center py-10  ">
    <h2 className="flex items-center justify-center text-6xl font-bold cursor-pointer mb-10">
         Rentals
      </h2>
      <div className="max-w-4xl mx-auto p-6 bg-opacity-10  rounded-lg shadow-md shadow-CustomYellow-1">
        <h1 className="text-3xl font-bold mb-6 text-CustomYellow-1">Explore the Rhyno Experience</h1>
        <p className="text-lg mb-6">
          Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-CustomYellow-1">Campus Commuting Redefined</h2>
        <p className="text-lg mb-6">
          Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
        </p>
        <div className="flex space-x-4 mt-6">
          <a href="#" className="flex items-center justify-center bg-CustomYellow-1 text-CustomBlack-2 rounded-lg p-3 shadow-md hover:bg-CustomYellow-2 transition duration-200">
            <FaAndroid className="mr-2" />
            <span>Download for Android</span>
          </a>
          <a href="#" className="flex items-center justify-center bg-CustomYellow-1 text-CustomBlack-2 rounded-lg p-3 shadow-md hover:bg-CustomYellow-2 transition duration-200">
            <FaApple className="mr-2" />
            <span>Download for Apple</span>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
