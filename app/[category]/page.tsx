import { Card } from "@components/Card";
import { getCategories } from "@services";
import React from "react";
import Image from "next/image";
import Title from "@components/Title";

const Page = async ({ params }: { params: { category: string } }) => {
  const categories = await getCategories();

  const category = categories.find(
    (category) => category.node.slug === params.category
  );

  if (!category) {
    return <div>Category not found</div>; // TODO not found page
  }

  return (
    <div className="flex flex-col items-center">
      <Title text={category.node.name} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {category.node.posts.map((post) => (
          <Card
            title={post.title}
            link={category.node.slug + "/" + post.slug}
            key={post.id}
            image={
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                height={220}
                width={220}
              />
            }
            description={post.title}
          />
        ))}
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    category: category.node.slug,
  }));
}

export default Page;
