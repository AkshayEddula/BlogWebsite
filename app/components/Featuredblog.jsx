import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsDot } from "react-icons/bs";
import moment from "moment/moment";
import Link from "next/link";

const Featuredblog = ({ posts }) => {
  return (
    <div className="Featuredblog">
      <h1>Featured Blog Posts</h1>
      {posts.slice(-3, -2).map((post) => (
        <div className="featured post">
          <img src={post.image.url} />
          <div className="featured-2">
            <div className="author">
              <h3>{post.author.authorName}</h3>
              <BsDot />
              <h3>{moment(post.datepublished).format("MMM DD, YYYY")}</h3>
            </div>
            <Link href={"/posts/" + post.slug}>
              <div className="title">
                <h1>{post.title}</h1>
                <HiArrowUpRight />
              </div>
            </Link>
            <div className="summary">
              <p>{post.postSummary}</p>
            </div>
            <div className="tags">
              <h5 className="tag1">{post.tag.tagname}</h5>
              {post.tag.tagname2 !== null && post.tag.tagname2 !== "null" && (
                <h5 className="tag2">{post.tag.tagname2}</h5>
              )}
              {post.tag.tagname3 !== null && post.tag.tagname3 !== "null" && (
                <h5 className="tag3">{post.tag.tagname3}</h5>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featuredblog;
