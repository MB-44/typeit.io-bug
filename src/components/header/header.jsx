import React from "react";
import styles from "./header.module.css";

function Header(){
    return (
    <header className={styles.headerContainer}>
        <div>
            <nav>
                <h1>TypeIt</h1>

                <div className={styles.navBarItems}>
                    <ul>
                        <li><button><a href="#">Check</a></button></li>
                        <li><button className={styles.dashboard_button}><a href="#">Dashboard</a></button></li>
                    </ul>
                </div>

            </nav>
        </div>
    </header>
    );
}

export default Header;