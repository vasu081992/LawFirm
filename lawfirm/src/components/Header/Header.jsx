import React from "react"
import styles from "./Header.module.css"
import Logo from "../Logo/Logo"


import Navbar from "../Navbar/Navbar"
import Contact from "../ContactNow/Contactnow"

const Header = () =>{

return(

    <div className={styles.header}>

        <Logo/>
        <Navbar nav1="Home" nav2="Attorneys" nav3="Practice Areas" nav4="About Us"  />
        <Contact/>

    </div>


)


}

export default Header