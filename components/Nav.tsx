import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@services";

const Nav = async () => {
  const categories = await getCategories();

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
              {categories.map((category) => (
                <div className="dropdown dropdown-hover" key={category.node.id}>
                  <Link
                    href={category.node.slug}
                    role="button"
                    className="btn btn-ghost font-normal"
                  >
                    {category.node.name}
                  </Link>
                  <ul className="dropdown-content menu shadow bg-base-100 rounded-box w-52">
                    {category.node.posts.map((post) => (
                      <li key={post.id}>
                        <Link
                          href={category.node.slug + "/" + post.slug}
                          className="flex px-2"
                        >
                          <Image
                            src={post.featuredImage.url}
                            alt={post.title}
                            width="50"
                            height="50"
                            className="rounded-2xl"
                          />
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
