import React, { useState, useEffect } from "react";
import "./Gallery.css";
import img1 from "./assets/gallery/gallery1.jpg";
import img2 from "./assets/gallery/gallery2.jpg";
import img3 from "./assets/gallery/gallery3.jpg";
import img4 from "./assets/gallery/gallery4.jpg";
import img5 from "./assets/gallery/gallery5.png";

const images = [img1, img2, img3, img4, img5];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="gallery-container" id="gallery">
      <h2 className="gallery-title head">Gallery</h2>
      <div className="carousel">
        <button className="prev" onClick={goToPrevious}>&#10094;</button>
        <div className="carousel-images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`carousel-img ${index === currentIndex ? "active" : ""}`}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <button className="next" onClick={goToNext}>&#10095;</button>
      </div>
    </div>
  );
}
