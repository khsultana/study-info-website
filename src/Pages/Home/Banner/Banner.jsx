import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/Banner Image/australia-city.jpg";
import img2 from "../../../assets/Banner Image/canada-city-with-flag.jpg";
import img3 from "../../../assets/Banner Image/denmark-city-with-flag.jpg";
import img4 from "../../../assets/Banner Image/london-city.jpg";
import img5 from "../../../assets/Banner Image/new-zealand-city-with-flag.jpg";
import img6 from "../../../assets/Banner Image/sweden-city.jpg";
import img7 from "../../../assets/Banner Image/usa-city.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
      <div>
        <img src={img7} />
      </div>
    </Carousel>
  );
};

export default Banner;
