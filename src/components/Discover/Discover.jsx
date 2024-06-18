import React, { useRef } from "react";
import classes from "./Discover.module.css";
import slides from "../../mock.json";
import categories from "../../categories.json";
import { Carousel } from "../Carousel/Carousel";
import { Categories } from "../Categories/Categories";
import prev from "../../assets/prevBtn.svg";
import next from "../../assets/nextBtn.svg";

function Discover() {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };

  //   const handleSlideChange = (swiper) => {
  //     document.querySelectorAll(`.${classes.slide__image}`).forEach((img) => {
  //       img.style.border = "none";
  //     });
  //     // Add border to the active slide
  //     const activeSlide = swiper.slides[swiper.activeIndex].querySelector(
  //       `.${classes.slide__image}`
  //     );
  //     if (activeSlide) {
  //       activeSlide.style.border = "1px solid black";
  //     }
  //   };

  //   useEffect(() => {
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //       handleSlideChange(swiperRef.current.swiper);
  //     }
  //   }, []);

  return (
    <section className={classes.discover}>
      <div className={classes.container}>
        <div className={classes.discover__navigation}>
          <h2>Discover</h2>
          <div className={classes.navigation__btns}>
            <button
              onClick={handlePrevClick}
              type="button"
              data-role="none"
              aria-label="Previous"
            >
              <img src={prev} alt="Previous" />
            </button>
            <button
              onClick={handleNextClick}
              type="button"
              data-role="none"
              aria-label="Next"
            >
              <img src={next} alt="Next" />
            </button>
          </div>
        </div>

        <Categories categories={categories} />
        <Carousel ref={swiperRef} slides={slides} />
      </div>
    </section>
  );
}

export default Discover;
