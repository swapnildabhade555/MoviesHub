import React, {Component} from "react";

import styles from './Navbar.module.css';

function Navbar(){
    
        return(
            <>
                <div className={styles.nav}>
                    <div className={styles.title}>Movies-App</div>
                    <div className={styles.cartIconContainer}>
                        <img className={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                        <div className={styles.cartCount}>3</div>
                    </div>



                </div>
            
            </>


        )
    
}
export default Navbar;