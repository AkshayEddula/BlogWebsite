import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async (slug) => {
  const QUERY = gql`
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        title
        author {
          authorName
        }
        datepublished
        slug
        id
        image {
          url
        }
        content {
          html
        }
        categories {
          slug
        }
      }
    }
  `;
  const result = await request(graphqlAPI, QUERY, { slug });

  return result;
};
