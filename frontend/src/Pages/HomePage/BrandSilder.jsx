
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../HomePage/Home.module.css"

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <div className={styles.brandslider} style={{ width:"85%", margin:"auto"}}>
        <p style={{letterSpacing:"8px",fontSize:"18px", marginTop:"30px",marginBottom:"40px"}}>FEATURED BRANDS</p>
        <Slider  {...settings}>
          <div >
            <img style={{width:"90%",borderRadius:"30px",marginLeft:"10px"}}  src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/dog1_1_1600x.jpg?v=1663712086" alt="" />
          </div>
          <div>
           <img style={{width:"90%",borderRadius:"30px",marginLeft:"10px"}} width="90%" src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/download_1_copy_1600x.jpg?v=1653328103" alt="" />
          </div>
          <div>
            <img style={{width:"90%",borderRadius:"30px",marginLeft:"10px"}} width="90%" src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/pitaka_1600x.png?v=1659475653" alt="" />
          </div>
          <div>
            <img style={{width:"90%",borderRadius:"30px",marginLeft:"10px"}} width="90%" src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/ohom3_1600x.png?v=1659475686" alt="" />
          </div>
          <div>
          <img style={{width:"90%",borderRadius:"30px",marginLeft:"10px"}} width="90%" src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/Brookstone_Promo_Badge_3_1600x.jpg?v=1653328132" alt="" />
          </div>
          <div>
           <img style={{width:"90%",borderRadius:"30px",marginLeft:"10px"}} width="90%" src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/download_copy_1600x.jpg?v=1653328148" alt="" />
          </div>
          <div>
           <img style={{width:"90%",borderRadius:"30px"}} width="90%"  src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/ReAthlete_Promo_Badge_2_1600x.jpg?v=1653328163" alt="" />
          </div>
          <div>
            <img style={{width:"90%",borderRadius:"30px"}} width="90%" src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/CraftyCocktail_Promo_Badge_4_1600x.jpg?v=1653328177" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}