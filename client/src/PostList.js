import React, {useState, useEffect} from "react";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:4000/posts");
        setPosts(res.data);
    }

    useEffect(() => {
        fetchPosts().then(r => console.log(r));
    }, []);

    const renderPosts = () => {
        return Object.values(posts).map(post => (
            <div className="card" key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
            </div>
        ))
    }
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderPosts()}
        </div>
    )
}

export default PostList;
