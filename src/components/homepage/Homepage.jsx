import React from 'react';
import styles from './Homepage.module.css';
import { useUsername } from '../authWrapper/AuthContext';
import { Link } from 'react-router';

function Homepage() {

    const username = useUsername();

    return (
        <div className={styles.content_block}>
            <div>
                <h2><strong>Welcome to Essential Blog!</strong></h2>
                <p>The best place for your posts. Use the nav bar to move around the place ;) </p>
            </div>
            
            <div>
                <h3><strong>About</strong></h3>
                <p>The Essential Blog is the best place for all blog posts to gather. It provides an easy way to browse and comment on different posts.
                    The only limit is your will to explore, and your ability to read. Thank you for utilizing our service, and please 
                    <Link to="/contact" className={styles.link}> Contact </Link> 
                    us if you have any feedback.
                </p>
            </div>
             
            {!username && ( //If user is logged out, show the log in button!
                <div className={styles.logged_out}>
                    <p className={styles.logged_out_text}>You can log in first, or go straight to exploring available blogs to your heart's content!</p>
                    <button className={`${styles.log_in_btn} ${styles.btn}`}>
                        <Link to="/login" className={styles.link_btn}> Log In </Link> 
                    </button>
                    <button className={`${styles.logged_out_explore_btn} ${styles.btn}`}>
                        <Link to="/posts" className={styles.link_btn}> Explore! </Link> 
                    </button>
                </div>
            )}

            {username && ( //If user is logged in, don't show the log in button!
                <div className={styles.logged_in}>
                    <p>Hey there {username}, ready to explore some blogs?</p>
                    <button className={styles.btn}>
                        <Link to="/posts" className={styles.link_btn}> Explore! </Link> 
                    </button>
                </div>
            )}

        </div>
    );
}

export default Homepage