import { gql, GraphQLClient } from "graphql-request";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { parse } from "graphql";

const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string,
  {
    cache: "no-store",
  }
);

type CategoryQuery = {
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

type PostQuery = {
  posts: {
    title: string;
    content: {
      raw: {
        children: (TextSegment | ImageSegment)[];
      };
    };
  }[];
};

export type TextSegment = {
  type: "paragraph";
  children: { text: string }[];
};

export type ImageSegment = {
  type: "image";
  src: string;
  title: string;
  handle: string;
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

export async function getPost(slug: { slug: string }) {
  const query: TypedDocumentNode<PostQuery, { slug: string }> = parse(gql`
    query Posts($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        content {
          raw
        }
      }
    }
  `);

  const result = (await graphqlClient.request(query, slug)) satisfies PostQuery;

  return {
    title: result.posts[0].title,
    content: result.posts[0].content.raw.children,
  };
}
