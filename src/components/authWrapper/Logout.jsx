import React from "react";
import styles from "./Logout.module.css";
import { Link } from "react-router";

function Logout() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Logged out</h2>
                <p>Thanks for spending time with us. You can jump back in whenever you’re ready.</p>
                <div className={styles.actions}>
                    <Link to="/login" className={styles.btn}>Log back in</Link>
                    <Link to="/" className={styles.link}>Return home</Link>
                </div>
            </div>
        </div>
    );
}

export default Logout;
