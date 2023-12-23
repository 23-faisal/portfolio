import { ExternalLink } from "react-external-link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-2 py-3 border-t border-slate-50 md:flex md:items-center md:justify-between">
        <h1 className="text-center md:text-left my-4">
          Made with love by @faisal
        </h1>
        <div className="flex items-center justify-center gap-4">
          <ExternalLink href="https://github.com/faisal-23-ahmed">
            <FaGithub className="text-2xl text-gray-500  hover:text-white transition duration-200 ease-in-out" />
          </ExternalLink>
          <ExternalLink href="https://twitter.com/faisalahmed_23">
            <FaXTwitter className="text-2xl text-gray-500  hover:text-white transition duration-200 ease-in-out" />
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/faisalahmed23/">
            <FaLinkedin className="text-2xl text-gray-500 md:text-gray-500 hover:text-white transition duration-200 ease-in-out" />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
