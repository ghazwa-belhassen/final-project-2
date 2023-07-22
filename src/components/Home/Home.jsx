import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const handleFind = (e) => {
    e.preventDefault();
    if (
      !details.from ||
      !details.to ||
      !details.start_date ||
      !details.end_date
    ) {
      alert("please fill all required fields");
    } else {
      navigate(
        `/flight/${details.from}/${details.to}/${details.start_date}/${details.end_date}`
      );
    }
  };
  return (
    <div>
      <head>
        <title>Book a Flight</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <main class="content">
          <form class="form">
            <div class="title">
              <h1>Book a Flight</h1>
              <p>Select locations and dates to get started.</p>
            </div>
            <div class="progress">
              <p>Step 1 of 3</p>
              <div class="progress-bar">
                <div class="bar-pink">
                  <p>33%</p>
                </div>
              </div>
            </div>
            <div class="categories">
              <button class="flights button">Flights</button>
              <button class="Hotels button">Hotels</button>
              <button class="Packages button">Packages</button>
            </div>
            <div class="row1">
              <div class="locations from-location1">
                <label class="from-location2" for="from">
                  From:
                </label>
                <select
                  class="from"
                  onChange={(e) =>
                    setDetails({ ...details, from: e.target.value })
                  }
                >
                  <option value="Australia">Australia</option>
                  <option value="Asgard">Asgard</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Burma">Burma</option>
                  <option value="Burundi">Burundi</option>
                  <option value="China">China</option>
                  <option value="Congo">Congo</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="England">England</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="India">India</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Russia">Russia</option>
                  <option value="Somalia">Somalia</option>
                  <option value="Syria">Syria</option>
                  <option value="United States">United States</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Wakanda">Wakanda</option>
                </select>
              </div>
              <div class="locations to-location1">
                <label class="to-location2" for="to">
                  To:
                </label>
                <select
                  class="to"
                  onChange={(e) =>
                    setDetails({ ...details, to: e.target.value })
                  }
                >
                  <option value="Australia">Australia</option>
                  <option value="Asgard">Asgard</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Burma">Burma</option>
                  <option value="Burundi">Burundi</option>
                  <option value="China">China</option>
                  <option value="Congo">Congo</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="England">England</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="India">India</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Russia">Russia</option>
                  <option value="Somalia">Somalia</option>
                  <option value="Syria">Syria</option>
                  <option value="United States">United States</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Wakanda">Wakanda</option>
                </select>
              </div>
            </div>
            <div class="row2">
              <div class="dates depart">
                <label class="depart-date" for="depart">
                  Depart:
                </label>
                <input
                  class="departure-date"
                  type="date"
                  onChange={(e) =>
                    setDetails({ ...details, start_date: e.target.value })
                  }
                />
              </div>
              <div class="dates return">
                <label class="returning-date" for="return">
                  Return:
                </label>
                <input
                  class="return-date"
                  type="date"
                  onChange={(e) =>
                    setDetails({ ...details, end_date: e.target.value })
                  }
                />
              </div>
            </div>
            <div class="next-button" onClick={handleFind}>
              <button class="next">Let's Fly!</button>
            </div>
          </form>
        </main>
        <section>
          <div class="box-container">
            <div class="box">
              <h2>what is SkyRoute?</h2>
              <p>
                SkyRoute compares millions of flights to find you the cheapest
                deal for you.
              </p>
            </div>
            <div class="box">
              <h2>SkyRoute is free!</h2>
              <p>
                when you find your perfect flight and you click book we link you
                directly to the airline .
              </p>
            </div>
            <div class="box">
              <h2>Flight Comparison</h2>
              <p>
                SkyRoute is an award winning site recommanded by google to you
                for the best services.
              </p>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}
