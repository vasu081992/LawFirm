import React from "react"

import styles from "./Hero.module.css"

import image from "../../assets/Image.png"

import Description from "../Description/Description"



const Hero = () =>{

return(

    <div className={styles.content}>

<Description/>

<img src={image} alt="hero" className={styles.hero}/>



    </div>


)


}

export default Hero