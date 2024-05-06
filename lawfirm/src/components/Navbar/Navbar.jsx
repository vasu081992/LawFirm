import React from "react"

import styles from "./Navbar.module.css"

const Navbar = ({nav1,nav2,nav3,nav4}) =>{

return(

    <div className={styles.navitems}>

    <p className={styles.item}> {nav1} </p>
    <p className={styles.item}>{nav2} </p>
    <p className={styles.item}> {nav3} </p>
    <p className={styles.item}> {nav4} </p>

    </div>


)


}

export default Navbar