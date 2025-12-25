import React from "react";
import Slider from "../component/Slider";
import AdmisionSlide from "../component/AdmisionSlide";
import SethBalkrishan from "../component/SethBalkrishan";
import Media from "../component/Media";
import Gallery from "../component/Gallery";

const Home = () => {
  return (
    <div>
      <Slider />
      <AdmisionSlide />
      <SethBalkrishan />
      <Gallery />
      <Media />
    </div>
  );
};

export default Home;
