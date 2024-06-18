import React from "react";
import classes from "./Discover.module.css";
import slides from "../../mock.json";
import categories from "../../categories.json";
import { Carousel } from "../Carousel/Carousel";
import { Categories } from "../Categories/Categories";
import prev from "../../assets/prevBtn.svg";
import next from "../../assets/nextBtn.svg";

function Discover() {
  return (
    <section className={classes.discover}>
      <div className={classes.container}>
        <div className={classes.discover__navigation}>
          <h2>Discover</h2>
          <div className={classes.navigation__btns}>
            <button
              // onClick={() => {
              //   swiperRef.current?.slidePrev();
              // }}
              type="button"
              data-role="none"
              className="carousel-topNav-prev slick-custom-buttons"
              aria-label="Previous"
            >
              <img src={prev} alt="Previous" />
            </button>
            <button
              // onClick={() => {
              //   swiperRef.current?.slideNext();
              // }}
              type="button"
              data-role="none"
              className="carousel-topNav-next slick-custom-buttons"
              aria-label="Next"
            >
              <img src={next} alt="Next" />
            </button>
          </div>
        </div>

        <Categories categories={categories} />
        <Carousel slides={slides} />
      </div>
    </section>
  );
}

export default Discover;
