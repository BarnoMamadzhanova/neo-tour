import React from "react";
import classes from "./Details.module.css";
import { useParams, useNavigate } from "react-router-dom";
import slides from "../../mock.json";
import { Tours } from "../../components/Tours/Tours";
import Reviews from "../../components/Reviews/Reviews";
import reviews from "../../reviews.json";

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
      <div className="hero">
        <img src={tour.image} alt={tour.title} />
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>

      <div className="container">
        <Tours tour={tour} />
        <h3>Reviews</h3>
        <Reviews reviews={tourReviews} />
        <button>Book now</button>
      </div>
    </div>
  );
}

export default Details;
