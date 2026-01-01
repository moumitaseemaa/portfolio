import Container from "./layouts/Container";
import Heading from "./layouts/Heading";
import ProjectCard from "./layouts/ProjectCards";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Protfolio = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const showProjects = [
    {
      id: 1,
      title: "Eshop Ecommerce with React.JS",
      description:
        "E-shop is a modern e-commerce web application built with React.js, designed to deliver a smooth and engaging shopping experience.",
      image: project1,
      github: "https://github.com/moumitaseemaa/eshop.git",
      demo: "https://eshop-two-flame.vercel.app/",
    },
    {
      id: 2,
      title: "Ecovista with Next.JS",
      description:
        "Developed EcoVista using Next.js to showcase environmental and eco-related information with a responsive and intuitive user interfacet.",
      image: project2,
      github: "https://github.com/moumitaseemaa/ecoVista.git",
      demo: "https://eco-vista-tan.vercel.app/",
    },
    {
      id: 3,
      title: "Docucraft with Next.JS",
      description:
        "The project is built using Next.js, focusing on performance, scalability, and modern web development best practices",
      image: project3,
      github: "https://github.com/moumitaseemaa/docucraft.git",
      demo: "https://docucraft-seven-chi.vercel.app/",
    },
    {
      id: 4,
      title: "CineRenta with React.JS",
      description:
        "CineRental is a React-based application featuring both dark and light modes to enhance user comfort and accessibility.",
      image: project4,
      github: "https://github.com/moumitaseemaa/CineRental.git",
      demo: "https://cine-rental-murex.vercel.app/",
    },
    // {
    //   id: 5,
    //   title: "Eshop Ecommerce with React.JS",
    //   description:
    //     "E-shop is a modern e-commerce web application built with React.js, designed to deliver a smooth and engaging shopping experience.",
    //   image: project5,
    //   github: "https://github.com/moumitaseemaa/eshop.git",
    //   demo: "https://eshop-two-flame.vercel.app/",
    // },
    // {
    //   id: 6,
    //   title: "Ecovista with Next.JS",
    //   description:
    //     "Developed EcoVista using Next.js to showcase environmental and eco-related information with a responsive and intuitive user interfacet.",
    //   image: project6,
    //   github: "https://github.com/moumitaseemaa/ecoVista.git",
    //   demo: "https://eco-vista-tan.vercel.app/",
    // },
  ];

  return (
    <section id="portfolio" className="bg-offWhite z-50">
      <Container className="topBottomPadding resTopBottomPadding px-4 md:px-25 xl:px-0">
        <div className="relative">
          <Heading
            title={"Protfolio"}
            className={
              "text-center text-black/90 before:left-[50%] before:w-[160px] "
            }
          />
        </div>
        <div className=" flex justify-center">
          <p className="para text-black/80 max-w-[415px] sm:auto">
            A glimpse into the projects I have worked on:
          </p>
        </div>

        {/* Showing Projects */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[-30px] sm:mt-0">
          {showProjects.slice(0, visibleCount).map((project) => (
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
          {visibleCount < showProjects.length ? (
            <button
              className="buttonStyle text-black bg-violet-500 hover:bg-violet-600 flex items-center gap-2.5"
              onClick={() => setVisibleCount((prev) => prev + 2)}
            >
              Show More
              <IoIosArrowDown className="text-lg" />
            </button>
          ) : (
            <button
              className="buttonStyle text-black bg-violet-500 hover:bg-violet-600 flex items-center gap-2.5"
              onClick={() => setVisibleCount(2)}
            >
              Show Less
              <IoIosArrowDown className="text-lg rotate-180" />
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Protfolio;
