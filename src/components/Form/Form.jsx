import React, { useState } from "react";
import classes from "./Form.module.css";

const countryCodes = [
  { code: "+996", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "+7", flag: "🇰🇿", name: "Kazakhstan" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
];

function Form() {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);
  const [participants, setParticipants] = useState(1);

  const handleParticipantsChange = (increment) => {
    setParticipants((prev) =>
      increment ? Math.min(prev + 1, 6) : Math.max(prev - 1, 1)
    );
  };

  return (
    <form className={classes.form}>
      <label htmlFor="phone_number" className={classes.input_phone}>
        Phone number
        <input type="text" placeholder="+996 _ _ _  _ _ _  _ _ _" />
      </label>
      <label htmlFor="commentaries" className={classes.input_commentaries}>
        Commentaries to trip
        <input type="text" placeholder="Write your wishes to trip..." />
      </label>
      <label htmlFor="participants" className={classes.participants}>
        Commentaries to trip
        <input type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
