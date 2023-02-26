import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../HomePage/Home.module.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", fontSize:"40px", backgroundColor:"lightgray"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",backgroundColor:"lightgray" }}
        onClick={onClick}
      />
    );
  }

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={styles.productSlider} style={{ width:"85%", margin:"auto"}}>
        <p style={{letterSpacing:"8px",fontSize:"18px", marginTop:"60px",marginBottom:"40px"}}>BEST SELLERS</p>
        <Slider {...settings}>
          <div >
            <img style={{cursor:'pointer'}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/products/KS917-BLK-Lifestyle-5_800x.jpg?v=1629417899" alt="" />
            <p style={{fontSize:"14px", fontFamily:"sans-serif",marginTop:"10px",cursor:"pointer",cursor:'pointer'}}>CleanLight air XL UV Air Purifier</p>
            <p>$ 259.99</p>
            
          </div>
          <div>
            <img style={{cursor:'pointer'}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/products/14534544_espresso_1.jpg?v=1644850807" alt="" />
            <p style={{fontSize:"14px", fontFamily:"sans-serif",marginTop:"10px",cursor:'pointer'}}>Liberator Flip Ramp Intimate Position Pillow</p>
            <p>$ 179.00</p>
          </div>
          <div>
            <img style={{cursor:'pointer'}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/products/11361101_black_1_800x.jpg?v=1602008915" alt="" />
            <p style={{fontSize:"14px", fontFamily:"sans-serif",marginTop:"10px",cursor:'pointer'}}>Liberator Flip Ramp Intimate Position Pillow</p>
            <p>$ 229.99</p>
          </div>
          <div>
            <img style={{cursor:'pointer'}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/products/15392549_merlot_2.jpg?v=1642115672" alt="" />
            <p style={{fontSize:"14px", fontFamily:"sans-serif",marginTop:"10px",cursor:'pointer'}}>Liberator Esse Sensual Lounge Chair</p>
            <p>$ 499.99</p>
          </div>
          <div>
            <img style={{cursor:'pointer'}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/products/ZC-7ZJG-1XHA_Large_Grey_1.jpg?v=1654723182" alt="" />
            <p style={{fontSize:"14px", fontFamily:"sans-serif",marginTop:"10px",cursor:'pointer'}}>Ergonomic Travel Neck Pillow</p>
            <p>$ 55.00</p>
          </div>
          <div>
            <img style={{cursor:'pointer'}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/products/3dfan_1.jpg?v=1657760756" alt="" />
            <p style={{fontSize:"14px", fontFamily:"sans-serif",marginTop:"10px",cursor:'pointer'}}>3D Hologram LED Fan Projector </p>
            <p>$ 129.00</p>
          </div>
          <div>
           <img style={{cursor:'pointer'}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/products/KS928-BLK_Black_3.jpg?v=1629418996" alt="" />
           <p style={{fontSize:"14px", fontFamily:"sans-serif",marginTop:"10px",cursor:'pointer'}}>CleanLight air XL UV Air Purifier with Air Quality Monitoring 550 sqft</p>
            <p>$ 259.99</p>
          </div>
          <div>
            <img style={{cursor:'pointer'}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/products/4d_escape_black_8.jpg?v=1672940531" alt="" />
            <p style={{fontSize:"14px", fontFamily:"sans-serif",marginTop:"10px",cursor:'pointer'}}>Brookstone Mach IX Massage Chair</p>
            <p>$ 7,999.00</p>
          </div>
        </Slider>
      </div>
    );
  }
}