import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Home from "./components/Home/Home";
import AppFooter from "./components/Footer/AppFooter";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FlightDetails from "./components/FlightDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="App">
                <Carousel images={images} />
              </div>
              <Home />
            </div>
          }
        />
        <Route
          path="/flight/:from/:to/:start_date/:end_date"
          element={<FlightDetails />}
        />
      </Routes>
      <AppFooter />
    </>
  );
}
export default App;
const images = [
  require("./images/russia.webp"),
  require("./images/sidi bou.jpg"),
  require("./images/St.-Petersburg.jpg"),
  require("./images/austria.jpg"),
  require("./images/bali.jpg"),
  require("./images/greece.jpg"),
  require("./images/hawai.jpg"),
  require("./images/russia 2.jpg"),
  require("./images/japan.webp"),
  require("./images/paris.jpg"),
];
