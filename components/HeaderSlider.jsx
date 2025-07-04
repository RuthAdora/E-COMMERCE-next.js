import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Slider1 from "@/assets/slide5.png";
import Slider2 from "@/assets/slide6.png";
import Slider3 from "@/assets/slide4.png";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Long African Dresses ",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: Slider1,
    },
    {
      id: 2,
      title: "Yellow Africa Dashiki Clothing for Men | African Wear",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: Slider2,
    },
    {
      id: 3,
      title: "Kids fashion dresses",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: Slider3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-base text-primary pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-primary rounded-full text-white font-medium">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <Image
                  src={slide.imgSrc}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-oprimary" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
