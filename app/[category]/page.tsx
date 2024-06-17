import { Card } from "@components/Card";
import { getCategories } from "@services";
import React from "react";
import Image from "next/image";

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
      <h2 className="text-4xl font-bold py-8">{category.node.name}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {category.node.posts.map((post) => (
          <Card
            title={post.title}
            link={post.slug}
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
