import React, { ReactElement } from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { getCategories } from "@services";

const GetStartedCard = ({
  title,
  link,
  image,
  description,
}: {
  title: string;
  link: string;
  image: ReactElement<ImageProps>;
  description: string;
}) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl hover:scale-[1.02] transition-all duration-300">
      <Link href={link}>
        <figure>{image}</figure>
        <div className="card-body border-t-2">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
    </div>
  );
};

const GetStarted = async () => {
  const categories = await getCategories();

  return (
    <section className="py-11 px-14 flex flex-col items-center">
      <h2 className="text-4xl font-bold">Get Started</h2>
      <div className="flex flex-row flex-wrap justify-center px-8 py-10 gap-24">
        {categories.map((category) => (
          <GetStartedCard
            title={category.node.name}
            link={category.node.slug}
            key={category.node.id}
            image={
              <Image
                src={category.node.defaultImage.url}
                alt={category.node.name}
                height={220}
                width={220}
              />
            }
            description={category.node.description}
          />
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
