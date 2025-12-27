import { useState } from "react";
import Container from "./layouts/Container";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  let [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary z-50">
      <Container className="px-4 xl:px-0 py-4 lg:py-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h2 className="text-xl font-medium lg:text-2xl">
            <span className="text-violet-500">..Mou</span>
            <span className="text-white">mita</span>
          </h2>

          {/* desktoop menu */}
          <ul className="hidden lg:flex justify-center items-center gap-7.5 font-medium text-lg leading-6 text-white">
            <li>
              <a href="#" className="anchorHover">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="anchorHover">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="anchorHover">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="anchorHover">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#blog" className="anchorHover">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="anchorHover">
                {" "}
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Device Responsive */}
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="lg:hidden text-xl text-white"
          >
            {openMenu ? <RxCross2 /> : <FaBars />}
          </div>
        </div>
      </Container>

      {openMenu && (
        <ul className="lg:hidden  flex flex-col gap-y-2 font-medium text-base leading-5 text-black p-5 bg-violet-400">
          <li>
            <a href="#" onClick={() => setOpenMenu(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpenMenu(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpenMenu(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setOpenMenu(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setOpenMenu(false)}>
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpenMenu(false)}>
              {" "}
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
