import { Link } from "react-router-dom";
import Container from "./layouts/Container";
import Heading from "./layouts/Heading";

const Blogs = () => {
  const articles = [
    {
      id: 1,
      title: "Px, Em, Rem, Vmin, and Vmax: Understanding the Differences",
      image:
        "https://miro.medium.com/v2/resize:fit:640/format:webp/1*rbDG1zGyvwLFvCD_N35QJQ.jpeg",
      link: "https://medium.com/@moumitaseemaa/px-em-rem-vmin-and-vmax-understanding-the-differences-5f78e8fac6e6",
    },
    {
      id: 2,
      title: "JWT vs Session Authentication in Modern Web Applications",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_WPiSTcovMj5WM8y48ohVg.png",
      link: "https://medium.com/@moumitaseemaa/jwt-vs-session-authentication-in-modern-web-applications-432c855a494b",
    },
    {
      id: 3,
      title: "What is MERN Stack & 10 Why We Should Learn MERN Stack?",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*YQ7FjlNouzQL77U15uXBlA.png",
      link: "https://medium.com/@moumitaseemaa/what-is-mern-stack-10-crucial-reasons-why-we-should-learn-mern-stack-497c1241d7dc",
    },
  ];

  return (
    <section id="blog" className="bg-[#ddd] z-50 resTopBottomPadding">
      <Container className="topBottomPadding px-4 md:px-25 xl:px-0">
        <div className="relative">
          <Heading
            title={"Lastest Blogs"}
            className={"text-center text-black/90 before:left-[50%] "}
          />
        </div>
        <div className=" flex justify-center">
          <p className=" para text-black/80 max-w-[516px]">
            Exploring modern web development articles focused on performance,
            scalability, best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={article.link}
              target="_blank"
              className="group rounded-lg overflow-hidden shadow-xl sm:border sm:border-transparent border-3 border-gray-400   group-hover:border-violet-500 transition-all duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-fill group-hover:scale-105 transition duration-300"
              />

              <div className="p-6">
                <h3 className="w-auto text-base sm:text-lg font-semibold leading-7 text-black/80  mt-2 mb-3">
                  {article.title}
                </h3>

                <button className="buttonStyle bg-violet-500 text-black group-hover:bg-violet-600">
                  Read on Medium
                </button>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
