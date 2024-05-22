import React from "react";
import "./PostCreate.css";
import axios from "axios";
import {useState} from 'react';

const PostCreate = () => {
    const [title, setTitle] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('')
    };

    return (
        <div>
            <h1 className="display-4">Create Post</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>標題</label>
                    <input type="text" value={title} onChange={e => (setTitle(e.target.value))} className="form-control"
                           placeholder="標題"/>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default PostCreate;
