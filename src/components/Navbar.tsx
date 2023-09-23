import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 mb-4 py-4 pl-4 text-white">
      <ul className="flex gap-x-4">
        <li>
          <Link className="hover:underline" href="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="hover:underline" href="/sign-in">
            Sign In
          </Link>
        </li>

        <li>
          <Link className="hover:underline" href="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
