import React from "react"

import styles from "./Description.module.css"

import Input from "../Input/Input"

const Description = () =>{

return(

    <div className={styles.wrapper}>

     <p className={styles.text1}> You dont have to <span> Fight them alone. </span></p>
     
     <p className={styles.text2}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>

     <Input/>
     
    </div>


)


}

export default Description