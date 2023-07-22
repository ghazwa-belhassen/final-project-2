import React, { useState, useEffect, useCallback } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images]);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="carousel-overlay">
      <div className="carousel">
        <button onClick={handlePrev}>&lt;</button>
        <img className="carousel-image" src={images[currentIndex]} alt="Country View" />
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div className="carousel-text">Travel the world with our SkyRoute</div>
    </div>
  );
  
};

export default Carousel;
