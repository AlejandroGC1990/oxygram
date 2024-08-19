import { useState } from "react";
// import "../styles/Components/Carousel.css";
import "../styles/Components/_carousel.scss";

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
      <div className="carousel__content">
        {displayedImages.length > 0 && (
          <img
            src={displayedImages[currentIndex].urls.regular}
            alt={displayedImages[currentIndex].description || "Image"}
          />
        )}
      </div>
      <div className="carousel__content-dots">
      <button className="carousel__content-dots__button" onClick={handlePrev}>
        &lt;
      </button>
        {displayedImages.map((_, index) => (
          <span
            className={`carousel__content-dots__dot ${
              index === currentIndex ? "active" : ""
            }`}
            key={index}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      <button className="carousel__content-dots__button" onClick={handleNext}>
        &gt;
      </button>
      </div>
    </div>
  );
};

export default Carousel;
