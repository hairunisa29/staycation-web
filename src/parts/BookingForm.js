import React, { useEffect, useState, useRef } from "react";
import propTypes from "prop-types";
import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";
import "assets/scss/bookingform.scss";

const BookingForm = (props) => {
  const { itemDetails, startBooking } = props;

  const initialState = {
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  const [data, setData] = useState(initialState);


  const updateData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    }, [value])

    return ref.current
  }

  const prevDataRef = usePrevious(data)

  useEffect(() => {
    if (prevDataRef?.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();

      setData({
        ...data,
        duration: countDuration,
      });
    }

    if (prevDataRef?.duration !== data.duration) {
      console.log('masuk')
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + data.duration - 1)
      );

      setData({
        ...data,
        date: {
          ...data.date,
          endDate: endDate,
        },
      });
    }

    
  }, [data]);

  // useEffect(() => {
  //   if (prevDataRef?.duration !== data.duration) {
  //     console.log('masuk')
  //     const startDate = new Date(data.date.startDate);
  //     const endDate = new Date(
  //       startDate.setDate(startDate.getDate() + data.duration - 1)
  //     );

  //     setData({
  //       ...data,
  //       date: {
  //         ...data.date,
  //         endDate: endDate,
  //       },
  //     });
  //   }
  // }, [data.duration]);

  return (
    <div className="card bordered" style={{ padding: "60px 80px" }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${itemDetails.price}{" "}
        <span className="text-gray-500 font-weight-light">
          per {itemDetails.unit}
        </span>
      </h5>

      <label htmlFor="duration">How long will you stay?</label>
      <InputNumber
        max={30}
        suffix={" night"}
        isSuffixPlural
        onChange={updateData}
        name="duration"
        value={data.duration}
      />

      <label htmlFor="date">Pick a date</label>
      <InputDate onChange={updateData} name="date" value={data.date} />

      <h6
        className="text-gray-500 font-weight-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{" "}
        <span className="text-gray-900 font-weight-normal">
          ${itemDetails.price * data.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-gray-900 font-weight-normal">
          {data.duration} {itemDetails.unit}
        </span>
      </h6>

      <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        // onClick={startBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
};

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default BookingForm;
