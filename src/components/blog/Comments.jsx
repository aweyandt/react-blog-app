import React, { useEffect, useState, useRef } from 'react';
import styles from './Comments.module.css';
import IndividualComment from './IndividualComment';
import { Link, useParams } from 'react-router';
import axios from 'axios';
import { useUsername } from '../authWrapper/AuthContext';

function Comments() {
    const params = useParams();

    const [comment, setComment] = useState({
        content: ""
    });

    const [commentList, setCommentList] = useState([]);
    const textboxRef = useRef();

    const username = useUsername();

    const postComment = async () => {

        try {
            const commentRes = await axios.post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`, {
                name: username,
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
        <div>
            <h2>Comments:</h2>

            {!username && (
                <div className={styles.logged_out}>
                    <p>You must 
                        <Link to="/login" className={styles.link}> LOG IN </Link>  to comment.
                    </p>
                </div>
            )}

            {username && (
                <div className={styles.comments}>
                    <p>Ready to post a comment {username}?</p>
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
                </div>
            )}
            


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