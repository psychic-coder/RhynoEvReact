import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
  return (
    <div className="w-full bg-CustomBlack-3">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[900px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/seLite.png" // Adjusted path for image
              alt="First slide"
            />
             <button class="absolute bottom-5 left-5  px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-CustomYellow-1 focus:ring-offset-2 hover:text-CustomYellow-2 hover:bg-CustomDarkGrey-1 bg-CustomDarkGrey-3 text-white">
             <Link to={"/selite"}>SE03 Lite</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[900px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/se.png" // Adjusted path for image
              alt="Second slide"
            />
             <button class="absolute bottom-5 left-5  px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-CustomYellow-1 focus:ring-offset-2 hover:text-CustomYellow-2 hover:bg-CustomDarkGrey-1 bg-CustomDarkGrey-3 text-white">
             <Link to={"/se"}>SE03</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[900px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/seMax.png" // Adjusted path for image
              alt="Third slide"
            />
              <button class="absolute bottom-5 left-5  px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-CustomYellow-1 focus:ring-offset-2 hover:text-CustomYellow-2 hover:bg-CustomDarkGrey-1 bg-CustomDarkGrey-3 text-white">
             <Link to={"/semax"}>SE03 Max</Link>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
