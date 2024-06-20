import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import axios from "axios";
import classes from "./Form.module.css";

function Form({ setActive, onSubmitSuccess, onSubmitError }) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: { participants: 1 },
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const participants = watch("participants", 1);

  const onSubmit = (data) => {
    console.log({ ...data, phone_number: phoneNumber });
    onSubmitSuccess();
    // onSubmitError();
  };

  //   const onSubmit = (data) => {
  //     axios
  //       .post("http://your-backend-url.com/book", {
  //         ...data,
  //         phone_number: phoneNumber,
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

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="phone_number" className={classes.input_phone}>
        Phone number
        <PhoneInput
          international
          defaultCountry="KG"
          value={phoneNumber}
          onChange={(value) => setPhoneNumber(value)}
          className={classes.phone_input}
        />
      </label>
      <label htmlFor="commentaries" className={classes.input_commentaries}>
        Commentaries to trip
        <input
          type="text"
          placeholder="Write your wishes to trip..."
          {...register("commentaries")}
        />
      </label>
      <label htmlFor="participants" className={classes.participants}>
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
          <div>
            {participants} {participants === 1 ? "person" : "people"}
          </div>
        </div>
        <input
          type="hidden"
          value={participants}
          {...register("participants", { required: true })}
        />
      </label>
      <button type="submit" disabled={!phoneNumber}>
        Submit
      </button>
    </form>
  );
}

export default Form;
