
import React, { useState, useEffect } from "react";
import { Button } from '../components/Button'

//Import animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

import img1 from "../assets/img/side-view-illustrator.jpg";
import img2 from "../assets/img/high-angle-designer.jpg";
import img3 from "../assets/img/woman-arranging.jpg";

const slides = [
  { image: img1, title: "Designs That Speak, Experiences That Last", text: "We create visuals and digital experiences."},
  { image: img2, title: "Creating Solutions for a Digital World", text: "Whether it's branding, UI/UX, or personalized framing, we deliver innovative solutions that merge beauty with purpose."},
  { image: img3, title: "Framing Memories, Crafting Experiences", text: "Beyond digital design, we specialize in elegant picture frame that preserve life's most cherished moments with artistry and style."},
];

export const Slider = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(()=>{
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out-sine'
      })
    }, [slides.length])
    return (
    <div className="slider-cont">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <div className="content">
              <h2 data-aos="fade-up">{slide.title}</h2>
              <p data-aos="fade-up">{slide.text}</p>
              <Button text="Learn More" btnclass="point-button" to="/about"/>

                <button className="button prev" onClick={prevSlide}>‹</button>
                <button className="button next" onClick={nextSlide}>›</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const TestSlider = ({images}) => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="test-slider-container">
      <div
        className="test-slider-track"
        style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}
      >
        {images.map((src, i) => (
          <div className="test-slide" key={i}>
            <img src={src} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>

      <button className="button prev" onClick={prev}>‹</button>
      <button className="button next" onClick={next}>›</button>
    </div>
  );
};

