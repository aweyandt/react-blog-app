import React from 'react';
import { Link } from 'react-router';
import styles from './PostList.module.css';

function PostList() {

    const posts = [];
    for (let i = 1; i <= 21; i++) {
        posts.push(
            <Link to={`/posts/${i}`} key={i} className={styles.link}>Post #{i}</Link>
        );
    }

    return (
        <div className={styles.content_block}>
            <div className={styles.content_grid}>
                <h2><strong>Blog Posts</strong></h2>
                <div>
                    <h3><strong>About</strong></h3>
                    <p>Here are some of the large variety of blogs posts you can discover! Whether you'd like to view new and interesting content,
                    or would like to connect more with a community, your method to do so is here. Whether it's to educate yourself or others, enhancing your skills, 
                    or fostering a community with others, thank you for using Essential Blog! You are essential to keeping this community and website alive. 
                    </p>
                </div>
                <div className={styles.content_inner_grid}>
                    <div className={styles.category}>
                        <h3><strong>Coding</strong></h3>
                        {posts.slice(0, 7)}
                    </div>

                    <div className={styles.category}>
                        <h3><strong>Finance</strong></h3>
                        {posts.slice(7, 14)}
                    </div>

                    <div className={styles.category}>
                        <h3><strong>Health</strong></h3>
                        {posts.slice(14, 21)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostList;