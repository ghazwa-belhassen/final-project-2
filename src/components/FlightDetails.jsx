import React from "react";
import { useParams } from "react-router-dom";
import destinations from "../data";
export default function FlightDetails() {
  const params = useParams();
  const flight = destinations.find(
    (el) =>
      el.from == params.from &&
      el.to == params.to &&
      el.fly_date >= params.start_date &&
      el.fly_date < params.end_date
  );
  return (
    <div>
      <h1>
        {flight.from} {flight.to}
      </h1>
    </div>
  );
}
