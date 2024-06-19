import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Discover.module.css";
import slides from "../../mock.json";
import categories from "../../categories.json";
import { Carousel } from "../Carousel/Carousel";
import { Categories } from "../Categories/Categories";
import prev from "../../assets/prevBtn.svg";
import next from "../../assets/nextBtn.svg";

function Discover() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].path);
  const [filteredSlides, setFilteredSlides] = useState([]);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Filter slides based on the selected category
    const filtered = slides.filter(
      (slide) => slide.category === selectedCategory
    );
    setFilteredSlides(filtered);
  }, [selectedCategory]);

  // Function to handle previous btn on slider
  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  // Function to handle next btn on slider
  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handleCategoryClick = (categoryPath) => {
    setSelectedCategory(categoryPath);
  };

  const handleSlideClick = (slideId) => {
    navigate(`/details/${slideId}`);
  };

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

        <Categories
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
        <Carousel
          ref={swiperRef}
          slides={filteredSlides}
          onSlideClick={handleSlideClick}
        />
      </div>
    </section>
  );
}

export default Discover;
