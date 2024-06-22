import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import axios from "axios";
import classes from "./Form.module.css";
import user from "../../assets/user.svg";
import useBookingId from "../../hooks/useBookingId";

function Form({ setActive, onSubmitSuccess, onSubmitError }) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: { participants: 1 },
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const participants = watch("participants", 1);
  const bookingId = useBookingId();

  const onSubmit = (data) => {
    console.log({ ...data, phone_number: phoneNumber, booking_id: bookingId });
    onSubmitSuccess();
    // onSubmitError();
  };

  //   const onSubmit = (data) => {
  //     axios
  //       .post("https://..., {
  //         ...data,
  //         phone_number: phoneNumber,
  //         booking_id: bookingId,
  //       })
  //       .then((response) => {
  //         onSubmitSuccess();
  //       })
  //       .catch((error) => {
  //         onSubmitError();
  //       });
  //   };

  const handleParticipantsChange = (increment) => {
    const newValue = increment
      ? Math.min(participants + 1, 6)
      : Math.max(participants - 1, 1);
    setValue("participants", newValue);
  };

  const handlePhoneNumberChange = (value) => {
    if (value && value.length > 15) {
      value = value.slice(0, 15);
    }
    setPhoneNumber(value);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={classes.input_phone}>
        Phone number
        <PhoneInput
          international
          defaultCountry="KG"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className={classes.phone_input}
          id="phone_number"
        />
      </label>
      <label className={classes.input_commentaries}>
        Commentaries to trip
        <input
          type="text"
          id="commentaries"
          placeholder="Write your wishes to trip..."
          {...register("commentaries")}
        />
      </label>
      <label className={classes.participants}>
        Number of participants
        <div className={classes.participant_controls}>
          <button
            type="button"
            onClick={() => handleParticipantsChange(false)}
            disabled={participants === 1}
            className={participants === 1 ? classes.disabled_button : ""}
          >
            -
          </button>
          <span>{participants}</span>
          <button
            type="button"
            onClick={() => handleParticipantsChange(true)}
            disabled={participants === 6}
            className={participants === 6 ? classes.disabled_button : ""}
          >
            +
          </button>
          <div className={classes.participants__number}>
            <img src={user} alt="user" />
            {participants} {participants === 1 ? "person" : "people"}
          </div>
        </div>
        <input
          type="hidden"
          id="participants"
          value={participants}
          {...register("participants", { required: true })}
        />
      </label>
      <button
        type="submit"
        disabled={!phoneNumber}
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
