import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SimpleSliderProps {
  photos: string[];
}

export default function SimpleSlider({ photos }: SimpleSliderProps) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index} className="h-[70vh] w-[80vh]">
          <img
            src={photo}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </Slider>
  );
}
