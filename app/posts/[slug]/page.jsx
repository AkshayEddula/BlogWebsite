import getPostsSlug from "@app/services";
import { getPost } from "@app/services/getposts";
import moment from "moment";
import { BsDot } from "react-icons/bs";
import "@styles/globals.css";

export async function generateStaticParams() {
  const blogPosts = (await getPostsSlug()) || [];
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function page({ params }) {
  const { slug } = params;

  const { post } = await getPost(slug);

  return (
    <main className="blogmain">
      <div className="blogpost">
        <div className="line">
          <hr />
        </div>
        <div className="blogauthor">
          <h3>{post?.author?.authorName}</h3>
          <BsDot />
          <h3>{moment(post?.datepublished).format("MMM DD, YYYY")}</h3>
        </div>
        <div className="blogtitle">
          <h1>{post?.title}</h1>
        </div>
        <div>
          <img src={post?.image?.url} />
        </div>
        <div
          className="blogtext"
          dangerouslySetInnerHTML={{ __html: post?.content.html }}
        ></div>
        <div className="line">
          <hr />
        </div>
      </div>
    </main>
  );
}
