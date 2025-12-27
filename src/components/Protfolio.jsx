import Container from "./layouts/Container";
import Heading from "./layouts/Heading";
import ProjectCard from "./layouts/ProjectCards";
import blog1 from "../assets/images/blog1.webp";
import blog2 from "../assets/images/blog2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Protfolio = () => {
  let [showMore, setShowMore] = useState(false);
  const showProjects = [
    {
      id: 1,
      title: "Ecommerce Web Application",
      description:
        "A modern MERN stack e-commerce application with authentication, cart, and payment integration.",
      image: blog1,
      github: "https://github.com/yourusername/ecommerce-project",
      demo: "https://your-live-demo-link.com",
    },
    {
      id: 2,
      title: "Food Ordering UI",
      description:
        "A responsive food ordering interface built with React and Tailwind CSS. Which has the amazing order at the spot.",
      image: blog2,
      github: "https://github.com/yourusername/food-order-ui",
      demo: "",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-offWhite z-50"
    >
      <Container className="topBottomPadding resTopBottomPadding px-4 md:px-25 xl:px-0">
        <div className="relative">
          <Heading
            title={"Protfolio"}
            className={"text-center text-black/90 before:left-[50%] "}
          />
        </div>
        <div className=" flex justify-center">
          <p className="para text-black/80 max-w-[415px] sm:auto">
            A glimpse into the projects I have worked on:
          </p>
        </div>

        {/* Showing Projects */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[-30px] sm:mt-0">
          {showProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              github={project.github}
              demo={project.demo}
            />
            // another way for showProjects
            //  <ProjectCard key={project.id} {...project} />  it means Passing all object properties as separate props
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            className="buttonStyle border-2 border-violet-500 text-black bg-violet-500 flex items-center justify-center gap-2.5"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? <p>Show Less</p> : <p>Show More</p>}
            <IoIosArrowDown
              className={` text-lg transition-all ${
                showMore ? " rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Protfolio;
