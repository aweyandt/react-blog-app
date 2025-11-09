import React from 'react';
import styles from './Homepage.module.css';

function Homepage() {
    return (
        <div className={styles.content_block}>
            <h2>Homepage</h2>
            <p>The best place for your posts. Use the nav bar to move around the place!</p>
        </div>
    );
}

export default Homepage