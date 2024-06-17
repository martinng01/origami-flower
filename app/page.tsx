import Hero from "@components/Hero";
import { Card } from "@components/Card";
import { getCategories } from "@services";
import Image from "next/image";
import Title from "@components/Title";

const HomePage = async () => {
  const categories = await getCategories();

  return (
    <>
      <Hero />
      <section className="px-14 flex flex-col items-center">
        <Title text="Get Started" />
        <div className="grid grid-cols-2 xl:grid-cols-3 w-full xl:w-3/4 2xl:w-2/3 place-items-center justify-center px-8 py-10 gap-24">
          {categories.map((category) => (
            <Card
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
    </>
  );
};

export default HomePage;
