import { request, gql } from "graphql-request";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { parse } from "graphql";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

type CategoryQuery = {
  categories: {
    name: string;
    description: string;
    defaultImage: {
      url: string;
    };
    slug: string;
  };
};

export const getPosts = async () => {
  const query: TypedDocumentNode<CategoryQuery, Record<any, never>> = parse(gql`
    query Categories {
      categories {
        name
        description
        defaultImage {
          url
        }
        slug
      }
    }
  `);

  if (!graphqlAPI) {
    console.log("NEXT_PUBLIC_HYGRAPH_ENDPOINT not set!");
  }

  const result = await request(graphqlAPI as string, query);

  return result.categories;
};
