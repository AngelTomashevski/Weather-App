import React from "react";
import BlogPost from "./BlogPost";

const BlogList = () => {
  return (
    <div className="Blog flex">
      <BlogPost
        src="https://picsum.photos/300/200?random=1"
        title="Some random title"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue"
      />
      <BlogPost
        src="https://picsum.photos/300/200?random=5"
        title="Some another random title"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue"
      />
      <BlogPost
        src="https://picsum.photos/300/200?random=3"
        title="Some third random title"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue"
      />
    </div>
  );
};

export default BlogList;
