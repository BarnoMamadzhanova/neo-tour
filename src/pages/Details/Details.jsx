import React, { useState, useEffect } from "react";
import classes from "./Details.module.css";
import { useParams, useNavigate } from "react-router-dom";
// import slides from "../../mock.json";
// import recommendations from "../../recommendations.json";
// import reviews from "../../reviews.json";
import { Tours } from "../../components/Tours/Tours";
import Reviews from "../../components/Reviews/Reviews";
import goBack from "../../assets/goBackBtn.svg";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";
import closeBtn from "../../assets/close.svg";
import { getTourDetails } from "../../api/api";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Combine slides and recommendations for mock data
  // const allTours = [...slides, ...recommendations];
  // const tour = allTours.find((slide) => slide.id === parseInt(id));

  //Function for fetching data
  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const tourData = await getTourDetails(id);
        setTour(tourData);
      } catch (error) {
        console.error("Error fetching tour details", error);
      }
    };

    fetchTourDetails();
  }, [id]);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  // Filter reviews based on the tour ID for mock data
  // const tourReviews = reviews.filter((review) => review.id === tour.id);

  const handleBookingSuccess = () => {
    setModalMessage("Your trip has been booked!");
    setModalActive(true);
  };

  const handleBookingError = () => {
    setModalMessage("The tour can’t be booked");
    setModalActive(true);
  };

  const handleModalClose = () => {
    setModalActive(false);
    if (modalMessage === "Your trip has been booked!") {
      navigate("/");
    }
  };

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
        <Reviews
          // reviews={tourReviews}
          reviews={tour.reviews}
        />
        <button
          className={classes.booking__btn}
          onClick={() => setModalActive(true)}
        >
          Book now
        </button>
        {modalActive && (
          <Modal active={modalActive} setActive={setModalActive}>
            {modalMessage ? (
              <>
                <div className={classes.modal__message}>
                  <p>{modalMessage}</p>
                  <button onClick={handleModalClose}>Ok</button>
                </div>
              </>
            ) : (
              <>
                <div className={classes.modal__info}>
                  <div className={classes.modal__title}>
                    <h2>Info</h2>
                    <img src={closeBtn} alt="x" onClick={handleModalClose} />
                  </div>
                  <p className={classes.modal__text}>
                    To submit an application for a tour reservation, you need to
                    fill in your information and select the number of people for
                    the reservation
                  </p>
                </div>

                <Form
                  onSubmitSuccess={handleBookingSuccess}
                  onSubmitError={handleBookingError}
                />
              </>
            )}
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Details;
