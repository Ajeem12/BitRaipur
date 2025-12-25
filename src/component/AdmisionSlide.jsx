import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const AdmisionSlide = () => {
  const tickerItems = [
    "Important Dates Announced",
    "Apply Now for 2025-26",
    "Entrance Exam Schedule",
    "Scholarships Available",
    "Campus Tours Open",
    "Hostel Admissions",
    "Fee Structure Updated",
    "Counseling Sessions",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scroll
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <div className="h-20 bg-[#3a4c96] relative overflow-hidden -mt-2">
      {/* Fixed Admission Banner */}
      <Link
        to="/admissions"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm px-2 py-2 rounded-full text-white font-bold text-sm flex items-center gap-2 hover:bg-black/30 transition-all z-20"
      >
        Admission 2025-26
      </Link>

      {/* Slick Ticker Slider */}
      <div className="ml-48 pr-2 h-full">
        {" "}
        {/* Offset for fixed banner */}
        <Slider {...settings}>
          {tickerItems.map((item, idx) => (
            <div key={idx} className="px-2 h-[44px] flex items-center mt-6">
              <Link
                to="/announcements"
                className="text-white/80 font-medium text-sm hover:text-black hover:underline whitespace-nowrap "
              >
                {item}
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* Edge gradients */}
      {/* <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#3a4c96] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-transparent to-[#3a4c96] pointer-events-none z-10" /> */}
    </div>
  );
};

export default AdmisionSlide;
