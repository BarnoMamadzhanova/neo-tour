import React from "react";
// import { getReviewsData } from "./api";
import classes from "./Reviews.module.css";

export const Reviews = ({ reviews }) => {
  //Functionality for fetching data from api
  // const [fetchedReviews, setFetchedReviews] = useState([]);

  // useEffect(() => {
  //   const fetchReviewsData = async () => {
  //     try {
  //       const response = await getReviewsData(tourId);
  //       setFetchedReviews(response);
  //     } catch (error) {
  //       console.error("Error fetching reviews data:", error);
  //     }
  //   };

  //   if (tourId) {
  //     fetchReviewsData();
  //   }
  // }, [tourId]);

  // const allReviews = [...reviews, ...fetchedReviews];

  return (
    <>
      {/* {allReviews && allReviews.length > 0 ? ( */}
      {reviews && reviews.length > 0 ? (
        <div className={classes.reviews}>
          <h3 className={classes.reviews__title}>Reviews</h3>
          <div className={classes.container}>
            {/* {allReviews.map(review => ( */}
            {reviews.map((review) => (
              <div key={review.id} className={classes.user__info}>
                <div className={classes.user__flex}>
                  <img src={review.userFoto} alt={review.userName} />
                  <h6>{review.userName}</h6>
                </div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Reviews;
