import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp"



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position:"absolute", right:"0", display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{  ...style, display: "block"}}
      onClick={onClick}
    />
  );
}
 const SimpleSlider = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{height:"100%"}}>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
           <img src={image3} alt="" />
          </div>
        </Slider>
      </div>
    );
  }

  export default SimpleSlider;