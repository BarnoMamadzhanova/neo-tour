import { useState, useEffect } from "react";

const useBookingId = () => {
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    const generateBookingId = () => {
      return `BOOKING-${Date.now()}`;
    };

    setBookingId(generateBookingId());
  }, []);

  return bookingId;
};

export default useBookingId;
