import Comments from "./Comments";
import Content from "./Content";
import styles from "./BlogPost.module.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function BlogPost() {
    const params = useParams();
    
    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();
    const [error, setError] = useState(); //Used for preventing the post_Id being too high and causing an error

    console.log(postData, authorData);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`);
          
          //This'll set error in ccase the post id doesn't exist
          if (!postRes.data.id) {
            setError("Post not found! Try searching up a different one ;)")
            return;
          }
          setPostData(postRes.data);

          const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
          setAuthorData(authorRes.data);
        } catch (e) {
          setError("Post not found! Try searching up a different one ;)")
          console.log(e);
        } finally {
          setLoading(false);
        }
      }

      fetchData()
    }, [params.post_id]);

    const current_day = new Date().toLocaleDateString();


    return <div className={styles.content_block}>
            {loading && <p>Loading</p>}

            {error && <p>{error}</p>}

            {!loading && !error && postData && authorData && ( //Need to check for the data as well because of rendering issues
              <>
                <Content 
                title={postData.title} 
                content={postData.body} 
                author={authorData.name} 
                date={current_day}
                />
                <Comments />
              </>
            )}
    </div>;
}

export default BlogPost;