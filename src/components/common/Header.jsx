import React from 'react';
import styles from './Header.module.css';
import { useTheme } from '../postLists';
import { Link } from 'react-router';


function Header() {
    const { toggleTheme } = useTheme();
    return (
        <div className={styles.header}>
            <h1 className={styles.header_title}>My Blog</h1>
            <nav className={styles.header_nav}>
                <ul className={styles.ul}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/posts">Blog Posts</Link>
                    </li>
                    <li className={styles.incomplete}>About</li>
                    <li>
                        <Link to ="/contact">Contact</Link>
                    </li>
                    <button onClick={toggleTheme}>Toggle Theme</button>
                </ul>
            </nav>
        </div>
    );
}

export default Header;