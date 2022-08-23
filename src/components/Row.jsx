import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Row(props) {
  const { content, title, index, type } = props;
  return (
    <div className="text-start mb-5">
      <h2 className="fs-3 fw-semibold mb-3 text-white">{title}</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        slidesPerGroup={6}
        navigation={true}
        modules={[Navigation]}
        className="rowSwiper"
        style={{zIndex :"100" }}
      >
        {content.movieList.map((item) => {
          return (
            <SwiperSlide key={item.id} className="movie-row">
              <Card movie={item} type={type} index={index}/>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  );
}

export default Row;
