import React from "react";
import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { image: "/banner/img2.jpg" },
  { image: "/banner/img4.jpg" },
  { image: "/banner/img5.jpg" },
  { image: "/banner/img6.jpg" },
  { image: "/banner/img7.jpg" },
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
    adaptiveHeight: false,
  };

  return (
    <section className="relative w-full -mt-10 sm:-mt-36">
      <SliderLib {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              className="
                relative w-full
                h-[55vh] sm:h-[65vh] md:h-[80vh] lg:h-[90vh]
                bg-cover bg-center
              "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10" />
            </div>
          </div>
        ))}
      </SliderLib>

      {/* Slick dots fix */}
      <style jsx global>{`
        .slick-dots {
          bottom: 20px;
        }
        .slick-dots li button:before {
          font-size: 10px;
          color: white;
          opacity: 0.6;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: white;
        }
        @media (max-width: 640px) {
          .slick-dots {
            bottom: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Slider;
