import React from "react";
import Slider from "../component/Slider";
import NotificationBar from "../component/NotificationBar";
import SethBalkrishan from "../component/SethBalkrishan";
import Media from "../component/Media";
import Gallery from "../component/Gallery";

const Home = () => {
  return (
    <div>
      <Slider />
      <NotificationBar />
      <SethBalkrishan />
      <Gallery />
      <Media />
    </div>
  );
};

export default Home;
