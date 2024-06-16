import { gql, GraphQLClient } from "graphql-request";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { parse } from "graphql";

const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string,
  {
    cache: "no-store",
  }
);

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
            id
            description
          }
        }
      }
    }
  `);

  const result = await graphqlClient.request(query);

  return result.categoriesConnection.edges;
};
