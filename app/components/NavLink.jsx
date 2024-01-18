import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-5 pl-3 pr-4 mt-2 text-left text-2xl rounded md:p-2 hover:underline"
    >
      {title}
    </Link>
  );
};

export default NavLink;
