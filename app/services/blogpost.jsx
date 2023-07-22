import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getBlogPost = async () => {
  const QUERY = gql`
    query getPosts {
      posts {
        slug
        author {
          authorName
        }
        datepublished
        title
        id
        tag {
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
  `;
  const result = await request(graphqlAPI, QUERY);

  return result;
};
