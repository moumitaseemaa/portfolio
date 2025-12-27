import Container from "./layouts/Container";
import bannerImage from "../assets/images/bannerImage.png";
import Heading from "./layouts/Heading";

const About = () => {
  return (
    <section id="about" className="bg-offWhite">
      <Container
        className={"px-4 xl:px-0 topBottomPadding  resTopBottomPadding"}
      >
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
          <div className="w-[296px] h-[352px] md:w-95 md:h-120 bg-violet-500 border-6 border-primary overflow-hidden rounded-2xl mt-6 md:mt-15 lg:mt-0 mx-auto lg:mx-0">
            <img
              src={bannerImage}
              alt="bannerImage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <div className="relative">
              <Heading
                title={"About Me"}
                className="text-black/90 lg:before:left-25  before:left-[50%]"
              />
            </div>
            <p className="text-base font-normal leading-6 text-black/80 w-auto lg:max-w-146 mx-auto">
              <span className="inline-block mt-6 mb-6">
                I’m an enthusiastic MERN Stack Developer with a strong eye for
                design and a deep love for clean, efficient code. I enjoy
                turning ideas into real, user-friendly digital experiences where
                both performance and visual detail matter.
              </span>
              <span className=" inline-block mb-6 ">
                My journey into web development started several years ago, and
                since then I’ve continuously challenged myself to learn, adapt,
                and grow with modern technologies. Today, I focus on building
                scalable and high-quality web applications using tools like{" "}
                <span className="font-bold">
                  React, Next.js,TypeScript, Node.js, Tailwind CSS
                </span>
                , and other modern platforms. I believe great products are built
                at the intersection of usability, aesthetics, and
                well-structured code—and that’s exactly what I strive to
                deliver.
              </span>
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="buttonStyle bg-violet-500 border-transparent text-black hover:bg-violet-600 hover:text-black"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
