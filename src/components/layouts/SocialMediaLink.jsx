import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const SocialMediaLink = () => {
  const githubProfile = `https://github.com/moumitaseemaa`;
  const linkedInProfile = `https://www.linkedin.com/in/moumitaseemaa/`;
  const instaProfile = `https://www.instagram.com/moumitaseemaa`;

  return (
    <ul className="flex items-center sm:gap-x-7.5 gap-x-3 ">
      <Link to={githubProfile} target="_blank" className="socialMedia">
        <FiGithub className="text-xl sm:text-2xl" />
      </Link>
      <Link to={linkedInProfile} target="_blank" className="socialMedia">
        <FaLinkedinIn className="text-xl sm:text-2xl" />
      </Link>

      <Link to={instaProfile} target="_blank" className="socialMedia">
        <CiInstagram className="text-xl sm:text-2xl" />
      </Link>
    </ul>
  );
};

export default SocialMediaLink;
