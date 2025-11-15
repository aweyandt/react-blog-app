import React, { useState } from 'react';
import styles from './Header.module.css';
import { useTheme } from '../postLists';
import { Link } from 'react-router';
import { useAuth, useUsername } from '../authWrapper/AuthContext';


function Header() {
    const { toggleTheme } = useTheme();
    const username = useUsername();
    const {logout} = useAuth();

    const [isMenuOpen, setIsMenuOpen] = useState(false); //For responsive hamburger menu

    return (
        <div className={styles.header}>
            <h1 className={styles.header_title}>Essential Blog</h1>

            <button className={styles.hamburger_menu} onClick={() => setIsMenuOpen(!isMenuOpen)}> 
                ☰
            </button>

            <nav className={`${styles.header_nav} ${isMenuOpen ? styles.open : ""}`}>
                <ul className={styles.ul}>
                    <li>
                        <button className={styles.btn} onClick={toggleTheme}>Toggle Theme</button>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/posts">Blog Posts</Link>
                    </li>
                    <li>
                        <Link to ="/contact">Contact</Link>
                    </li>
                    <li className={styles.link_logout}>
                        {username ? <p onClick={logout}>Hi {username}, <strong>Logout?</strong></p> : <Link to ="/login">Login</Link>}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;