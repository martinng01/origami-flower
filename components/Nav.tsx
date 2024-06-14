import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar w-full bg-base-100">
          {/* Drawer Icon */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              Origami Flowers
            </Link>
          </div>

          {/* Navbar Items */}
          <div className="flex-none hidden lg:block">
            <div className="flex flex-0">
              <div className="dropdown dropdown-hover">
                <Link
                  href={"/flower"}
                  role="button"
                  className="btn btn-ghost font-normal"
                >
                  Flower
                </Link>
                <ul className="dropdown-content menu shadow bg-base-100 rounded-box w-52">
                  <li>
                    <div className="flex">
                      <Image
                        src="/assets/images/flowers/bellflower.png"
                        alt="bellflower"
                        width="50"
                        height="50"
                        className="rounded-2xl"
                      />
                      <Link href={"/flower/bellflower"} className="px-2">
                        Bellflower
                      </Link>
                    </div>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover">
                <Link
                  href={"/rose"}
                  role="button"
                  className="btn btn-ghost font-normal"
                >
                  Rose
                </Link>
              </div>
              <div className="dropdown dropdown-hover">
                <Link
                  href={"/base"}
                  role="button"
                  className="btn btn-ghost font-normal"
                >
                  Base
                </Link>
              </div>
              <div className="dropdown dropdown-hover">
                <Link
                  href={"/calyx"}
                  role="button"
                  className="btn btn-ghost font-normal"
                >
                  Calyx
                </Link>
              </div>
              <div className="dropdown dropdown-hover">
                <Link
                  href={"/leaf"}
                  role="button"
                  className="btn btn-ghost font-normal"
                >
                  Leaf
                </Link>
              </div>
              <div className="dropdown dropdown-hover">
                <Link
                  href={"/stem"}
                  role="button"
                  className="btn btn-ghost font-normal"
                >
                  Stem
                </Link>
              </div>
              <div className="dropdown dropdown-hover">
                <Link
                  href={"/vase"}
                  role="button"
                  className="btn btn-ghost font-normal"
                >
                  Vase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
