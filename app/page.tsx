import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/assets/images/flowers.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Home of Origami Paper Flowers
          </h1>
          <p className="mb-5">A redesign of the website</p>
          <button className="btn btn-primary">
            <Link href="http://www.origami-flower.org/index.php">Here</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
