import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (pathname) => location.pathname === pathname;

  return (
    <section className="   max-w-7xl mx-auto bg-[#111827]   border-b border-slate-200 py-3 md:py-5 px-2 sticky top-0  z-50 shadow-lg ">
      <nav className="font-titleFont w-full  flex  items-center  justify-between">
        <div>
          <Link className="flex items-center gap-2" to="/">
            <img
              src="/logo.jpeg"
              className="h-12 md:h-15 w-12 md:w-15 rounded-full border-2 border-teal-600 hover:border-green-600 "
              alt="faisal "
            />
            <p className="text-teal-700 font-logoFont text-2xl md:text-3xl hover:text-green-600 hidden md:block">
              faisal23
            </p>
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-4 ">
            <li className="">
              <Link
                className={`border-b-2 border-transparent text-sm md:text-xl md:hover:border-white transition ease-in-out duration-200  ${
                  isActive("/") ? " text-violet-600" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li
              className={`border-b-2 border-transparent text-sm  md:text-xl md:hover:border-white transition ease-in-out duration-200  ${
                isActive("/blog") ? " text-violet-600" : ""
              }`}
            >
              <Link to="/blog">Blog</Link>
            </li>
            <li
              className={`border-b-2 border-transparent text-sm md:text-xl md:hover:border-white transition ease-in-out duration-200  ${
                isActive("/portfolio") ? " text-violet-600" : ""
              }`}
            >
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li
              className={`border-b-2 border-transparent text-sm md:text-xl md:hover:border-white transition ease-in-out duration-200  ${
                isActive("/contact") ? " text-violet-600" : ""
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
