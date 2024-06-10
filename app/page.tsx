import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section className="flex h-screen justify-center">
      <div className="hidden xl:block flex flex-1 w-full" />
      <div className="flex-col items-center">
        <div className="w-full aspect-[2.5] relative flex items-center">
          <Image
            src="/assets/images/flowers.png"
            alt="flowers"
            fill={true}
            className="object-cover"
          />
          <div className="absolute flex flex-col gap-8 mx-7">
            <h1 className="banner_h1">
              Home of <br />
              Origami Flowers
            </h1>
            <h1 className="banner_h2">A redesign of the website</h1>
            <Link href="http://www.origami-flower.org/index.php">
              <button type="button" className="white_btn">
                Here
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-full px-16 py-8">
          <h2 className="h2">Get Started</h2>
          <div className="flex flex-wrap justify-center items-center gap-24 px-8">
            <div className="home_card">
              <Link href="/flower">
                <Image
                  src="/assets/images/home/flower-default.png"
                  alt="flower"
                  height={200}
                  width={200}
                  quality={100}
                  className="home_card_img"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:block hidden flex flex-1 w-full" />
    </section>
  );
};

export default Home;
