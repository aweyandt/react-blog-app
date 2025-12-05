import React, { useState } from 'react';
import styles from './Header.module.css';
import { useTheme } from '../postLists';
import { Link } from 'react-router';
import { useAuth, useUsername } from '../authWrapper/AuthContext';
import { useNavigate } from 'react-router';


function Header() {
    const { theme, toggleTheme } = useTheme();
    const username = useUsername();
    const {logout} = useAuth();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false); //For responsive hamburger menu

    const handleLogout = () => {
        logout();
        navigate('/logout');
    }

    return (
        <div className={styles.header}>
            <h1 className={styles.header_title}>{username ? `${username}'s Blog` : 'Essential Blog'}</h1>

            <button className={styles.hamburger_menu} onClick={() => setIsMenuOpen(!isMenuOpen)}> 
                ☰
            </button>

            <nav className={`${styles.header_nav} ${isMenuOpen ? styles.open : ""}`}>
                <ul className={styles.ul}>
                    <li>
                        <div className={styles.theme_toggle}>
                            <input
                                id="theme-toggle"
                                className={styles.theme_input}
                                type="checkbox"
                                checked={theme === 'dark'}
                                onChange={toggleTheme}
                            />
                            <label htmlFor="theme-toggle" className={styles.theme_switch}>
                                <span className={styles.theme_thumb} />
                                <span className={styles.theme_text}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
                            </label>
                        </div>
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
                        {username ? <p onClick={handleLogout}>Hi {username}, <strong>Logout?</strong></p> : <Link to ="/login">Login</Link>}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
