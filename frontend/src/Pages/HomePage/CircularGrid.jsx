import React from 'react'
import styles from "../HomePage/Home.module.css";
const CircularGrid = () => {
  return (
    <div className={styles.circularGrid}>
    <p style={{letterSpacing:"6px",fontSize:"18px", marginTop:"100px"}}>FEATURED CATEGORIES</p>
      <div className={styles.container}>
            
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_3_1600x.webp?v=1652917417" alt="" />
                <p>Audio</p>
            </div>
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_15_1600x.webp?v=1652917776" alt="" />
                <p>Massage Chairs</p>
            </div>
            <div className={styles.categorytag}> 
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_5_1600x.webp?v=1652917431" alt="" />
                <p>Leg & Foot Massage</p>
            </div>
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_6_1600x.webp?v=1652917439" alt="" />
                <p>Neck & Back Massage</p>
            </div>
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_7_1600x.webp?v=1652917449" alt="" />
                <p>Wine & Bar</p>
            </div>
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_8_1600x.webp?v=1652917479" alt="" />
                <p>Lighting</p>
            </div>
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_9_1600x.webp?v=1652917507" alt="" />
                <p>Pillow</p>
            </div>
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_10_1600x.webp?v=1652917518" alt="" />
                <p>SkinCare</p>
            </div>
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/led_1600x.png?v=1661534692" alt="" />
                <p>LED Light Tharepy</p>
            </div>
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_12_1600x.webp?v=1652917527" alt="" />
                <p>Technology</p>
            </div>
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_13_1600x.webp?v=1652917545" alt="" />
                <p>Kitchen</p>
            </div>
            <div className={styles.categorytag}>
                <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_14_1600x.webp?v=1652917554" alt="" />
                <p>Outdoor</p>
            </div>
      </div>
    </div>
  )
}

export default CircularGrid
