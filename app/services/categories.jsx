const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function getCategoriesSlug() {
  const { data } = await fetch(graphqlAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query getPosts {
        categories {
          slug
        }
      }
    `,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  let categories = data?.categories;

  return categories;
}
