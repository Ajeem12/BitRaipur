import React from "react";
import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/banner/img6.jpg",
  },
  {
    image: "/banner/img6.jpg",
  },
  {
    image: "/banner/img6.jpg",
  },
];

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: false,
    fade: true,
  };

  return (
    <section className="relative w-full -mt-20">
      <SliderLib {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              className="h-[70vh] md:h-[80vh] w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              {/* <div className="absolute inset-0 bg-black/30  " /> */}

              {/* Gradient bottom fade */}
              {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" /> */}
            </div>
          </div>
        ))}
      </SliderLib>
    </section>
  );
};

export default Slider;
