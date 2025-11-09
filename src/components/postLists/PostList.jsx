import React from 'react';
import { Link } from 'react-router';
import styles from './PostList.module.css';

function PostList() {
    return (
        <div className={styles.content_block}>
            <h2>Blog Posts</h2>
            <Link to="/posts/1" className={styles.link}>Post #1</Link>
            <Link to="/posts/2" className={styles.link}>Post #2</Link>
            <Link to="/posts/3" className={styles.link}>Post #3</Link>
        </div>
    );
}

export default PostList;