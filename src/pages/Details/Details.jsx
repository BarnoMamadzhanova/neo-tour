import React from "react";
import classes from "./Details.module.css";
import { useParams } from "react-router-dom";
import slides from "../../mock.json";
import { Tours } from "../../components/Tours/Tours";
import Reviews from "../../components/Reviews/Reviews";
import reviews from "../../reviews.json";

function Details() {
  const { id } = useParams();
  // Find the tour by id
  const tour = slides.find((slide) => slide.id === parseInt(id));

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className={classes.details}>
      <div className="hero">
        <img src={tour.image} alt={tour.title} />
        <button>Go back</button>
      </div>

      <div className="container">
        <Tours tour={tour} />
        <h3>Reviews</h3>
        <Reviews reviews={reviews} />
        <button>Book now</button>
      </div>
    </div>
  );
}

export default Details;
