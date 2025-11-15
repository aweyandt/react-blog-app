import React from 'react';
import styles from './IndividualComment.module.css'

function IndividualComment({ value }) {
    console.log(value);
    return (
        <div className={styles.individual_comment}>
            <div className={styles.comment_text}>
                <p><strong>Name:</strong> {value.name}</p>
                <p className={styles.indent}>"{value.body}"</p>
            </div>
            
            <hr className={styles.comment_seperator} />
        </div>
    );
    
}

export default IndividualComment