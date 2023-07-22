import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getCategories = async (slug) => {
  const QUERY = gql`
    query Post($slug: String!) {
      category(where: { slug: $slug }) {
        posts {
          title
          author {
            authorName
          }
          datepublished
          slug
          id
          tag {
            tagname
            tagname2
            tagname3
          }
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
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, QUERY, { slug });

  return result;
};
