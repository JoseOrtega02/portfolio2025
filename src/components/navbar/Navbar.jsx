
import { useState, useEffect } from "react";
import { Hamburger } from "../Icons/Hamburger";
import { Close } from "../Icons/Close";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Add offset if needed
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("text-accent");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("text-accent");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className="sticky top-0 z-10 bg-black border-b-2 border-white border-solid flex justify-center"
    >
      <div className={isOpen ? "text-white bg-black fixed w-full h-full z-10" : "hidden"}>
        <button className="w-full flex justify-end pr-9 py-5" onClick={() => setOpen(false)}>
          <Close />
        </button>
        <div className="flex flex-col gap-12 mt-28 items-center h-full w-full font-istokWeb text-2xl">
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#techStack" onClick={() => setOpen(false)}>
            Tech-Stack
          </a>
        </div>
      </div>
      <div className="w-full max-w-4xl flex flex-row justify-between px-6 py-3 bg-black">
        <h1 className="text-white text-2xl">JO</h1>
        <button onClick={() => setOpen(true)} className="md:hidden">
          <Hamburger />
        </button>
        <div className="hidden md:flex flex-row gap-5 text-white font-istokWeb items-center text-lg">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#techStack" className="nav-link">
            TechStack
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

