//Display.jsx
import React, {useEffect, useState} from 'react';
const Display = ({postId}) =>{
    const [post, setPost] = useState(null);
useEffect(() =>{
    if(postId){
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setPost(data));
    }
}, [postId]);
if (!post) return <div>Select a post to display it content.</div>;

return(
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
);

};
export default Display;