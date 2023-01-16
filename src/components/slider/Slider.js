import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./slider.css";
import Slide from "./Slide";
import { fetchApi } from "../../services/api";

const Slider = () => {
  const [data, setData] = useState([]);
  const sliderUrl = "v1/song/slider/latest";
  console.log(data);

  useEffect(() => {
    fetchApi(sliderUrl).then((response) => setData(response.results));
  }, []);

  return (
    <section>
      <Swiper
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Slide image={item.image.slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
