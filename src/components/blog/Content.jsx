import React from 'react';
import styles from './Content.module.css';

function Content({title, content, author, date}) {
    return (
        <div className={styles.content}>
            <h1>{title}</h1>
            <p>{content}</p>
            <div>
                <p>
                    <strong>Author:</strong> {author}
                </p>
                <p>
                    <strong>Date:</strong> {date}
                </p>
            </div>
        </div>
    );
}

export default Content;