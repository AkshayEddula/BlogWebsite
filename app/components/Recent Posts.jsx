import { HiArrowUpRight } from "react-icons/hi2";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import moment from "moment/moment";

const RecentPosts = ({ posts }) => {
  return (
    <div className="recentposts">
      <h2>Recent Blog Posts</h2>
      <div className="main-con">
        <div className="left-con">
          {posts.slice(-3, -2).map((post) => (
            <div className="recent-main post">
              <img src={post.image.url} />
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
          ))}
        </div>
        <div className="right-con">
          {posts.slice(-3, -1).map((post) => (
            <div key={post.id} className="post2 post">
              <img src={post.image.url} />
              <div className="post-info">
                <div className="author">
                  <h3>{post.author.authorName}</h3>
                  <BsDot />
                  <h3>{moment(post.datepublished).format("MMM DD, YYYY")}</h3>
                </div>
                <Link href={"/posts/" + post.slug}>
                  <div className="title">
                    <h1>{post.title}</h1>
                  </div>
                </Link>
                <div className="summary">
                  <p>{post.postSummary}</p>
                </div>
                <div className="tags">
                  <h5 className="tag1">{post.tag.tagname}</h5>
                  {post.tag.tagname2 !== null &&
                    post.tag.tagname2 !== "null" && (
                      <h5 className="tag2">{post.tag.tagname2}</h5>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
