import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router';
import styles from './CommonLayout.module.css';
import { useTheme } from '../components/postLists';

function CommonLayout() {
    const { theme } = useTheme();

    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer className={styles.footer}/>
        </div>
    );
    
}

export default CommonLayout;