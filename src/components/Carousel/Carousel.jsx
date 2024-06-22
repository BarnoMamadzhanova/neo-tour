import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import classes from "./Carousel.module.css";

export const Carousel = forwardRef(({ slides, onSlideClick }, ref) => {
  return (
    <>
      {slides && slides.length > 0 ? (
        <Swiper
          ref={ref}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} onClick={() => onSlideClick(slide.id)}>
              <div
                className={classes.slide__box}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className={classes.slider__title_bg}>
                  <h3>{slide.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}
    </>
  );
});
