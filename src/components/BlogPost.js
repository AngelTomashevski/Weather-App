import React from "react";

const BlogPost = ({ src, title, description }) => {
  return (
    <div className="BlogPost">
      <img alt="random" src={src} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default BlogPost;
