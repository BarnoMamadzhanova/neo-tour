import React from "react";
import classes from "./Details.module.css";
import { useParams, useNavigate } from "react-router-dom";
import slides from "../../mock.json";
import { Tours } from "../../components/Tours/Tours";
import Reviews from "../../components/Reviews/Reviews";
import reviews from "../../reviews.json";
import goBack from "../../assets/goBackBtn.svg";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = slides.find((slide) => slide.id === parseInt(id));

  if (!tour) {
    return <div>Tour not found</div>;
  }

  // Filter reviews based on the tour ID
  const tourReviews = reviews.filter((review) => review.id === tour.id);

  return (
    <div className={classes.details}>
      <div
        className={classes.hero}
        style={{ backgroundImage: `url(${tour.image})` }}
      >
        <button onClick={() => navigate(-1)} className={classes.back__btn}>
          <img src={goBack} alt="Home" />
          <p>Go back</p>
        </button>
      </div>

      <div className={classes.container}>
        <Tours tour={tour} />
        <Reviews reviews={tourReviews} />
        <button className={classes.booking__btn}>Book now</button>
      </div>
    </div>
  );
}

export default Details;
