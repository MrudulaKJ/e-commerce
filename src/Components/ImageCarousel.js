// CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../Images/carousel 1.jpg';
import image2 from '../Images/carousel 2.jpg';
import image3 from '../Images/carousel 3.jpg';
import image4 from '../Images/carousel 4.jpg';
import './Header.css' 

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={2000}
      >
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
        <div>
          <img src={image4} alt="Image 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
 