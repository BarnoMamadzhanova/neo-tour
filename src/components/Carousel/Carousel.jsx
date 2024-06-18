import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import classes from "./Carousel.module.css";

export const Carousel = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={24}
      slidesPerView={3}
      navigation
      // https://github.com/nolimits4web/swiper/discussions/6039
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={classes.slide__box}>
            <img src={slide.image} alt={slide.title} />
            <div className={classes.slider__title_bg}>
              <h3>{slide.title}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
