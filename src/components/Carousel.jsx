import { useState } from "react";
import "../styles/Components/Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sortedImages = [...images].sort((a, b) => b.likes - a.likes);
  const imgToShow = Math.min(10, sortedImages.length);
  const displayedImages = sortedImages.slice(0, imgToShow);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? displayedImages.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === displayedImages.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel-content">
        {displayedImages.length > 0 && (
          <img
            src={displayedImages[currentIndex].urls.regular}
            alt={displayedImages[currentIndex].description || "Image"}
          />
        )}
      </div>
      <button className="carousel-button" onClick={handleNext}>
        &gt;
      </button>
      <div className="carousel-dots">
        {displayedImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
