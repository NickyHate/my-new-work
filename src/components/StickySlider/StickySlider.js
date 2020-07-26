import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";
import Slide from "../Slide";

import data from "../../data";

const StickySlider = () => {
  const [swiper, updateSwiper] = useState(null);
  const [translate, updateTranslate] = useState(0);
  const [transition, updateTransition] = useState(0);

  const params = {
    slidesPerView: 4,
  };

  useEffect(() => {
    if (swiper) {
      swiper.on("setTranslate", (t) => {
        console.log(t, "translate");
        updateTranslate(t);
      });
      swiper.on("setTransition", (t) => {
        console.log(t, "transform");
        updateTransition(t);
      });
    }
  }, [swiper]);

  return (
    <Swiper getSwiper={updateSwiper} {...params}>
      {data.map((item, idx) => (
        <div key={idx}>
          <Slide
            translate={translate}
            transition={transition}
            color={item.color}
          >
            {item.title}
          </Slide>
        </div>
      ))}
    </Swiper>
  );
};

export default StickySlider;
