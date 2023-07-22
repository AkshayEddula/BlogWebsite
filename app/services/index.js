const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function getPostsslug() {
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
        }
      }
    `,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  let posts = data?.posts;

  return posts;
}
