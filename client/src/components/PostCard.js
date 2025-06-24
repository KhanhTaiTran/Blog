import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h3 className="post-title">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="post-excerpt">{post.excerpt}</p>
      <div className="post-meta">
        <span className="post-author">By {post.author}</span>
        <span className="post-date">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
