import Title from "@components/Title";
import { ImageSegment, TextSegment, getPost } from "@services";
import Image from "next/image";
import React from "react";

function getPostSegment(content: TextSegment | ImageSegment) {
  switch (content.type) {
    case "paragraph":
      return <p key={content.children[0].text}>{content.children[0].text}</p>;
    case "image":
      return (
        <>
          <br />
          <br />
          <br />
          <Image
            key={content.handle}
            src={content.src}
            alt={content.title}
            height={300}
            width={300}
          />
        </>
      );
    default:
      return <></>;
  }
}

export default async function Post({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = await getPost({ slug: params.slug });

  return (
    <div className="flex flex-col items-center">
      <Title text={post.title} />
      {post.content.map((content) => {
        return getPostSegment(content);
      })}
    </div>
  );
}
