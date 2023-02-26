import React from 'react';
import styles from "../HomePage/Home.module.css";
import SimpleSilder from "../HomePage/SimpleSlider";
import BrandSlider from "./BrandSilder";
import ProductSlider from "../HomePage/Productslider"
import CircularGrid from '../HomePage/CircularGrid';
import {FiArrowRight} from "react-icons/fi"
 
const Home = () => {
  return (
    <>
      <main>
        <div className={styles.outercontainer}>
            <div className={styles.sliderSection}>
              <SimpleSilder/>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.topSection}><img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/osaki-greatdeals2_1600x.png?v=1670241153" alt="" /></div>
                <div className={styles.bottomSection}>
                    <div><img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/newarrivals125_413483c9-b544-47ca-bcf7-16795dc38950_1600x.png?v=1670241694" alt="" /></div>
                    <div><img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/bestsellers125_1600x.png?v=1670241724" alt="" /></div>
                </div>
            </div>
        </div>
        <hr />
        <BrandSlider className={styles.brandSlide}/>
        <ProductSlider/>
        <CircularGrid/>
        <div className={styles.guideContainer}>
            <div className={styles.guideContent}>
              <p>A BUYER'S GUIDE TO </p>
              <p>THE PERFECT MASSAGE CHAIR</p>
            </div>
            <div  className={styles.guideButton} >
              <button className={styles.guidebtn}>SHOP THE GUIDE <FiArrowRight/></button>
              
            </div>
        </div>
      </main>
    </>
  )
}

export default Home;