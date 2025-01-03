/* eslint-disable react/prop-types */
import Code from "../Icons/Code";
import img1 from "/assets/test.png";

const projects = [
  {
    name: "Project1",
    linkGithub: "https://github.com/",
    linkDemo: "https://demo.com/",
    image: img1,
  },
  {
    name: "Project2",
    linkGithub: "https://github.com/",
    linkDemo: "https://demo.com/",
    image: img1,
  },
  {
    name: "Project3",
    linkGithub: "https://github.com/",
    linkDemo: "https://demo.com/",
    image: img1,
  },
];

function ProjectItem({ project }) {
  return (
    <div className="flex flex-col justify-center gap-2 max-w-80">
      {/* Image Container */}
      <div className="relative group">
        {/* Image */}
        <img src={project.image} alt="project image" className="w-full rounded-md" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
          <p className="mb-2 text-sm px-4 text-center">This is a brief description of the project.</p>
          <div className="flex gap-2">
            <a
              href={project.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent px-4 py-1 text-sm rounded hover:bg-opacity-80"
            >
              Demo
            </a>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex justify-between items-center mt-2">
        <h1 className="font-slabo text-m">{project.name}</h1>
        <button className="border-accent border-2 border-solid text-accent px-3 py-0.5">
          <Code />
        </button>
      </div>
    </div>
  );
}

export default function RenderProjects() {
  return (
    <div className="mt-5 text-white flex flex-col gap-16 justify-center items-center">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
}
