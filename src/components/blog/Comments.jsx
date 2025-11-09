import React, { useEffect, useState, useRef } from 'react';
import styles from './Comments.module.css';
import IndividualComment from './IndividualComment';
import { useParams } from 'react-router';
import axios from 'axios';

function Comments() {
    const params = useParams();

    const [comment, setComment] = useState({
        name: "",
        content: ""
    });

    const [commentList, setCommentList] = useState([]);
    const textboxRef = useRef();

    const postComment = async () => {

        //Checking if the two comment fields actually have some info before submitting
        //Gives the user an alert if not
        if (comment.name.length === 0 || comment.content.length === 0) {
            alert("Please make sure that both comment fields are filled out before attempting to submit!");
            return;
        }
        try {
            const commentRes = await axios.post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`, {
                name: comment.name,
                body: comment.content
            })

            setCommentList([...commentList, commentRes.data]);
            setComment({name: "", content: ""});
        } catch (e) {
          console.log(e);
        }
    }

    //Fetching the comments from the placeholder website
    useEffect(() => {
        const getCommment = async () => {
            try {
                const commentRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`);
                setCommentList(commentRes.data);
            } catch (e) {
                console.log(e);
            }
        }
        getCommment();
    }, [params.post_id]);

    return (
    <div className={styles.comments}>
            <h2>Comments</h2>
            <input 
                value={comment.name}
                onChange={(e) => setComment({...comment, name: e.target.value})}
                placeholder='Name' />
            <textarea 
                ref = {textboxRef}
                value={comment.content}
                onChange={(e) => setComment({...comment, content: e.target.value})}
                placeholder="Add a comment"></textarea>
            <button 
                onClick={postComment}
                className={styles.submit_btn} 
                type="submit">Submit
            </button>
            {commentList.length === 0 ? <p>No comments yet. Be the first to comment!</p> : 
            <div>
                <h3>Existing Comments:</h3>
                <ul>
                    {commentList.map((value, index) => (
                        <IndividualComment key={index} value={value}/>
                    ))}
                </ul>
            </div>
            }
        </div>
    );
} 

export default Comments;