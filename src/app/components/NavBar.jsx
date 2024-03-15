'use client'
import React, { useState } from "react";
import styles from "../styles/navbar.module.css"
import Link from "next/link";

// function Click() {
//     let navbar = document.querySelector(".mainNav");
//     if (navbar) {
//         navbar.classList.toggle("active");
//     }
// }





function Navbar() {
    const [navopen, setnavopen] = useState(false);


    const toggleMenu = () => {
        setnavopen(!navopen);

    };

    const closeMenu = () => {
        setnavopen(false);
    };
    return (
        <header className={styles.mainHeader} >
            <Link className={styles.brandLogo} href="/">
                           <h1 className={styles.navTitle}>Colorista</h1>
                        </Link>
            
            <div href="#" className={styles.toggleButton} onClick={toggleMenu}>

                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>


            </div>
            <nav className={`${styles[navopen ? 'mainNavOpen' : 'mainNav']}`}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        {/* <a href="#">About</a> */}
                        <Link href="/aboutus">
                           About Us
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                    <Link href="/contact">
                           Contact
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
