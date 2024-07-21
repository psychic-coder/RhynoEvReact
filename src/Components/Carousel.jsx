import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Carousel = () => {
  const carouselRef = useRef(null);
  const carouselItemsRef = useRef([]);

  useEffect(() => {
    gsap.set(carouselItemsRef.current, { xPercent: 100 });
    gsap.set(carouselItemsRef.current[0], { xPercent: 0 });

    let currentIndex = 0;

    const rotateCarousel = () => {
      const nextIndex = (currentIndex + 1) % carouselItemsRef.current.length;

      gsap.to(carouselItemsRef.current[currentIndex], {
        xPercent: -100,
        duration: 1,
        ease: 'power2.inOut',
      });

      gsap.fromTo(
        carouselItemsRef.current[nextIndex],
        { xPercent: 100 },
        {
          xPercent: 0,
          duration: 1,
          ease: 'power2.inOut',
        }
      );

      currentIndex = nextIndex;
    };

    const interval = setInterval(rotateCarousel, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={carouselRef} className="carousel rounded-box overflow-hidden relative">
      {[
        'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
        'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
        'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
        'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
        'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
        'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
        'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
      ].map((src, index) => (
        <div
          key={index}
          ref={(el) => (carouselItemsRef.current[index] = el)}
          className="carousel-item w-full h-[25rem] flex items-center justify-center relative"
        >
          <img src={src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded">
            Button {index + 1}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
