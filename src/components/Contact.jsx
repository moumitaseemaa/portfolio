import Container from "./layouts/Container";
import Heading from "./layouts/Heading";
import ContactForm from "./layouts/ContactForm";
import ContactInfoLink from "./layouts/ContactInfoLink";

const Contact = () => {
  return (
    <section id="contact" className="bg-primary z-50">
      <Container className="topBottomPadding resTopBottomPadding px-4 xl:px-0">
        <div className="relative">
          <Heading
            title={"Contact Me"}
            className={"text-center text-white/90 before:left-[50%] "}
          />
        </div>
        <div className=" flex justify-center">
          <p className="para text-white/80 w-[260px] sm:w-auto max-w-[736px]">
            Let’s move forward. Reach out anytime if you need a developer, have
            questions, collaboration ideas, or would like to connect
            professionally.
          </p>
        </div>
        <div className="flex flex-col-reverse  sm:flex-row sm:justify-between gap-x-12">
          <ContactInfoLink />
          <ContactForm />
        </div>
        <p className="text-[14px] flex justify-center items-center gap-1  sm:gap-x-2 sm:text-base font-normal leading-6 text-white/80 sm:mt-12.5 mt-9">
          <span className="text-xl"> © </span>
          2025 All Rights Resereved by Moumita
        </p>
      </Container>
    </section>
  );
};

export default Contact;
