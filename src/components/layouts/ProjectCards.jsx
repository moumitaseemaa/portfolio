import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, title, description, github, demo }) => {
  return (
    <div className="bg-[#f1f1f1] rounded-xl shadow-md hover:shadow-xl transition duration-200 overflow-hidden flex flex-col border-3 border-gray-400 ">
      {/* Image */}
      <Link to={demo || github} target="_blank" className="block p-6">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:56 md:h-60 object-fill rounded-xl"
        />
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-base w-auto sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-0 ">
            {title}
          </h3>

          <Link
            to={demo || github}
            target="_blank"
            className="text-[15px] flex items-center gap-1 text-gray-600 hover:text-gray-900 hover:underline decoration-2"
          >
            Live Demo <FiExternalLink size={16} />
          </Link>
        </div>

        <p className="w-auto text-gray-600 text-sm mb-5 flex-1">
          {description}
        </p>

        <div>
          {" "}
          <Link
            to={github}
            target="_blank"
            className="inline-block buttonStyle bg-violet-500  border-transparent text-black hover:underline decoration-2"
          >
            View Source Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
