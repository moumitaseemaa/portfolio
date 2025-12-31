import HTML5Icon from "../assets/logos/html.svg";
import CSS3Icon from "../assets/logos/css.svg";
import JSIcon from "../assets/logos/javscript.svg";
import TyoescriptIcon from "../assets/logos/typescript.svg";
import ReactIcon from "../assets/logos/react.svg";
import BootstrapIcon from "../assets/logos/bootstrap.svg";
import TailwindcssIcon from "../assets/logos/tailwindcss.svg";
import Redux from "../assets/logos/redux.svg";
import GitIcon from "../assets/logos/git.svg";
import GithubIcon from "../assets/logos/github.svg";
import NextjsIcon from "../assets/logos/nextjs.svg";
import MongodbIcon from "../assets/logos/mongodb.svg";
import ShadcnIcon from "../assets/logos/shadcn.svg";
import ExpressjsIcon from "../assets/logos/expressjs.svg";
import NodejsIcon from "../assets/logos/nodejs.svg";
import Container from "./layouts/Container";
import Heading from "./layouts/Heading";
import SkillIcon from "./layouts/SkillIcon";

const Skills = () => {
  return (
    <section id="skills" className="bg-primary z-50">
      <Container className="topBottomPadding resTopBottomPadding px-4 xl:px-0">
        <div className="relative">
          <Heading
            title={"My Skills"}
            className={"text-center text-white/90 before:left-[50%] before:w-[160px]"}
          />
        </div>
        <div className=" flex justify-center">
          <p className=" para text-white/80 max-w-[582px] sm:auto">
            The skills, tools, and technologies I excel at and use confidently
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap px-12 mt-[-16px] sm:mt-0 ">
          <SkillIcon Language={"HTML5"} SkillIcon={HTML5Icon} />
          <SkillIcon Language={"CSS3"} SkillIcon={CSS3Icon} />
          <SkillIcon Language={"JavaScript"} SkillIcon={JSIcon} />
          {/* <SkillIcon Language={"TypeScript"} SkillIcon={TyoescriptIcon} /> */}
          <SkillIcon Language={"React JS"} SkillIcon={ReactIcon} />
          <SkillIcon Language={"Next JS"} SkillIcon={NextjsIcon} />
          <SkillIcon Language={"Bootstrap"} SkillIcon={BootstrapIcon} />
          <SkillIcon Language={"Tailwind CSS"} SkillIcon={TailwindcssIcon} />
          <SkillIcon Language={"Redux"} SkillIcon={Redux} />
          <SkillIcon Language={"Git"} SkillIcon={GitIcon} />
          <SkillIcon Language={"GitHub"} SkillIcon={GithubIcon} />
          {/* <SkillIcon Language={"Shadcn UI"} SkillIcon={ShadcnIcon} /> */}
          {/* <SkillIcon Language={"Node JS"} SkillIcon={NodejsIcon} /> */}
          {/* <SkillIcon Language={"Express JS"} SkillIcon={ExpressjsIcon} /> */}
          {/* <SkillIcon Language={"MongoDB"} SkillIcon={MongodbIcon} /> */}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
