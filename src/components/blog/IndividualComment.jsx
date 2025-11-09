import React from 'react';
import styles from './IndividualComment.module.css'

function IndividualComment({ value }) {
    console.log(value);
    return (
        <div>
            <p>Name: {value.name}</p>
            <p>"{value.body}"</p>
            <hr className={styles.comment_seperator} />
        </div>
    );
    
}

export default IndividualComment