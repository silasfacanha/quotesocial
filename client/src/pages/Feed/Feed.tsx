import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import IPost from "../../../shared/Interfaces/IPost";
import { Mongoose, Schema } from "mongoose";

function Feed() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/post");
        const fetchedPosts = response.data;
        setPosts(fetchedPosts);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchPosts();
  }, [deletePost]);
  function deletePost(postToDelete: Schema.Types.ObjectId) {
    axios.delete(`http://localhost:3000/post/delete/${postToDelete}`);
  }

  return (
    <div>
      <h1> Feed </h1>

      <ul>
        {posts
          ? posts.map((post) => (
              <div>
                <li key={post._id.toString()}>{post.postText}</li>
                <button onClick={() => deletePost(post._id)}>Delete</button>
              </div>
            ))
          : ""}
      </ul>
    </div>
  );
}
export default Feed;
