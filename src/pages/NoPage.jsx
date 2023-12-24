import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <section className="max-w-7xl mx-auto my-6 md:my-12 px-2">
      <h1 className="text-4xl md:text-6xl text-center font-semibold text-gray-500 mb-4">
        Whoops!
      </h1>
      <p className="text-2xl text-center mb-4 text-gray-300">
        404 Page Not Found
      </p>
      <img
        className="rounded-lg mx-auto mb-6"
        src="https://i.gifer.com/3e2.gif"
        alt="Dog Vacation Gif"
      />
      <h1 className="text-2xl  md:text-3xl text-center text-gray-200 mb-4 md:mb-6">
        Looks like the page went on a vacation
      </h1>
      <p className="text-xl text-center ">
        Try{" "}
        <Link className="text-purple-600 underline" to="/">
          {" "}
          Home{" "}
        </Link>{" "}
        or{" "}
        <Link className="text-purple-600 underline" to="/blog">
          {" "}
          Blog
        </Link>{" "}
        instead
      </p>
    </section>
  );
};

export default NoPage;
