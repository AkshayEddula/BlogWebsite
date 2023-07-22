import Main from "@app/components/Main";
import Posts from "@app/components/posts";
import RecentPosts from "./components/Recent Posts";
import Featuredblog from "./components/Featuredblog";
import Prenex from "./components/prenex";
import { getBlogPost } from "./services/blogpost";

export default async function Home({ result }) {
  const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

  const { data } = await fetch(graphqlAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query getPosts {
        posts{
          slug
          author{
            authorName
          }
          datepublished
          title
          id
          tag{
            tagname
            tagname2
            tagname3
          }
          image {
            url
          }
          postSummary
        }
      }
    `,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  let posts = data?.posts;

  return (
    <main>
      <Main />
      <RecentPosts posts={posts} />
      <Featuredblog posts={posts} />
      <Posts posts={posts} />
      <Prenex />
    </main>
  );
}
