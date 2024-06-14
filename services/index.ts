import { request, gql } from "graphql-request";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { parse } from "graphql";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export type CategoryQuery = {
  categoriesConnection: {
    edges: {
      node: {
        name: string;
        slug: string;
        posts: {
          title: string;
          featuredImage: {
            url: string;
          };
          slug: string;
          id: number;
        }[];
        defaultImage: {
          url: string;
        };
        description: string;
        id: number;
      };
    }[];
  };
};

export const getCategories = async () => {
  const query: TypedDocumentNode<CategoryQuery, Record<any, never>> = parse(gql`
    query Categories {
      categoriesConnection {
        edges {
          node {
            name
            slug
            posts {
              title
              featuredImage {
                url
              }
              slug
              id
            }
            defaultImage {
              url
            }
            description
            id
          }
        }
      }
    }
  `);

  if (!graphqlAPI) {
    console.log("NEXT_PUBLIC_HYGRAPH_ENDPOINT not set!");
  }

  const result = await request(graphqlAPI as string, query);

  return result.categoriesConnection.edges;
};
