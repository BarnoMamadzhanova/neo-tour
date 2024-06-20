import React, { useState } from "react";
import classes from "./Details.module.css";
import { useParams, useNavigate } from "react-router-dom";
import slides from "../../mock.json";
import { Tours } from "../../components/Tours/Tours";
import Reviews from "../../components/Reviews/Reviews";
import reviews from "../../reviews.json";
import goBack from "../../assets/goBackBtn.svg";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = slides.find((slide) => slide.id === parseInt(id));
  const [modalActive, setModalActive] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  if (!tour) {
    return <div>Tour not found</div>;
  }

  // Filter reviews based on the tour ID
  const tourReviews = reviews.filter((review) => review.id === tour.id);

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
        <Reviews reviews={tourReviews} />
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
                <p>{modalMessage}</p>
                <button onClick={handleModalClose}>Ok</button>
              </>
            ) : (
              <>
                <h2 className={classes.modal__info}>Info</h2>
                <p className={classes.modal__text}>
                  To submit an application for a tour reservation, you need to
                  fill in your information and select the number of people for
                  the reservation
                </p>
                <Form
                  setActive={setModalActive}
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
