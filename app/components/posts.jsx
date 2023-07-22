import React from "react";
import "@styles/globals.css";
import PostTemplate from "./PostTemplate";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      <h2>All Blog Posts</h2>
      <div className="all_posts">
        {posts.map((post) => (
          <>
            <PostTemplate post={post} />
          </>
        ))}
      </div>
      <div className="line">
        <hr />
      </div>
    </div>
  );
};

export default Posts;
