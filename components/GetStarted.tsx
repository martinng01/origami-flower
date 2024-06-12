import React, { ReactElement } from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

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

const GetStarted = () => {
  return (
    <section className="py-11 px-14 flex flex-col items-center">
      <h2 className="text-4xl font-bold">Get Started</h2>
      <div className="flex flex-row flex-wrap justify-center px-8 py-10 gap-24">
        <GetStartedCard
          title="Flower"
          link="/flower"
          image={
            <Image
              src="/assets/images/home/flower-default.png"
              alt="flower"
              height={220}
              width={220}
            />
          }
          description="Discover the art of crafting lifelike, everlasting blooms with our step-by-step origami flower tutorials."
        />
        <GetStartedCard
          title="Rose"
          link="/rose"
          image={
            <Image
              src="/assets/images/home/rose-default.png"
              alt="rose"
              height={220}
              width={220}
            />
          }
          description="Master the elegance of origami with our detailed guides to crafting stunning paper roses."
        />
        <GetStartedCard
          title="Base"
          link="/base"
          image={
            <Image
              src="/assets/images/home/base-default.png"
              alt="base"
              height={220}
              width={220}
            />
          }
          description="Learn the foundational techniques with our comprehensive guides to creating the perfect origami flower base."
        />
        <GetStartedCard
          title="Calyx"
          link="/calyx"
          image={
            <Image
              src="/assets/images/home/calyx-default.png"
              alt="calyx"
              height={220}
              width={220}
            />
          }
          description="Craft an origami flower calyx, the protective layer that forms the green sepals beneath the petals."
        />
        <GetStartedCard
          title="Leaf"
          link="/leaf"
          image={
            <Image
              src="/assets/images/home/leaf-default.png"
              alt="leaf"
              height={220}
              width={220}
            />
          }
          description="Create lifelike origami leaves with our easy-to-follow instructions, adding the perfect finishing touch to your paper flowers."
        />
        <GetStartedCard
          title="Stem"
          link="/stem"
          image={
            <Image
              src="/assets/images/home/stem-default.png"
              alt="stem"
              height={220}
              width={220}
            />
          }
          description="Learn to craft sturdy and realistic origami stems, providing the essential support for your beautiful paper flowers."
        />
      </div>
    </section>
  );
};

export default GetStarted;
