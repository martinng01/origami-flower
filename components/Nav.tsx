import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center mb-4 py-3">
      <Link href="/" className="bg-white ml-2">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={55}
          height={55}
          className="object-contain"
        />
      </Link>

      {/*Desktop Navigation*/}
      <div className="sm:flex hidden gap-10 mx-12">
        <Link href="/flower" className="nav_text">
          Flower
        </Link>
        <Link href="/rose" className="nav_text">
          Rose
        </Link>
        <Link href="/base" className="nav_text">
          Base
        </Link>
        <Link href="/calyx" className="nav_text">
          Calyx
        </Link>
        <Link href="/leaf" className="nav_text">
          Leaf
        </Link>
        <Link href="/stem" className="nav_text">
          Stem
        </Link>
        <Link href="/vase" className="nav_text">
          Vase
        </Link>
      </div>

      {/*Mobile Navigation*/}
      <div className="sm:hidden flex"></div>
    </nav>
  );
};

export default Nav;
