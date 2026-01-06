import Container from "./layouts/Container";
import bannerImage from "../assets/images/bannerImage.png";
import SocialMediaLink from "./layouts/SocialMediaLink";

const Banner = () => {
  return (
    <section id="#" className="bg-primary lg:py-52 py-20 ">
      <Container>
        <div className="lg:flex justify-between items-center px-4 xl:px-0">
          <div className="text-white/90 text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl font-bold leading-10 -tracking-[-2%]">
              I'm Moumita Seema
            </h1>
            <p className="bannerPara sm:max-w-[400px] text-base text-white/80 font-normal sm:leading-8 leading-6 mt-3 sm:mt-6 mb-6 mx-auto">
              Enthusiastic Frontend Developer turning ideas into scalable,
              production-ready web applications.
            </p>
            <div className="flex justify-center lg:justify-start">
              <SocialMediaLink />
            </div>
          </div>
          <div className="flex lg:justify-end">
            <div className="size-[290px] md:w-87.5 md:h-87.5 rounded-full border-6 border-violet-700 flex justify-center items-center overflow-hidden mt-8 md:mt-12  lg:mt-0 mx-auto">
              <img
                src={bannerImage}
                alt="bannerImage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
