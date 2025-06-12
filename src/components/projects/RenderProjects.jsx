
/* eslint-disable react/prop-types */
import Code from "../Icons/Code";
import imgResumelo from "../../assets/Resumelo.png"
import imgInventarioFacil from "../../assets/InventarioFacil.png"
import imgChiller from "../../assets/Chiller.png"
const projects = [
  {
    name: "Resumelo",
    linkGithub: "https://github.com/JoseOrtega02?tab=repositories&q=Resumelo&type=&language=&sort=",
    linkDemo: "https://resumelo.netlify.app/",
    image: imgResumelo,
    desc:"Full stack project, Summary social network you can upload, like and download summaries."
  },
  {
    name: "Inventario Facil",
    linkGithub: "https://github.com/JoseOrtega02?tab=repositories&q=Inventario&type=&language=&sort=",
    linkDemo: "https://inventariofacil.netlify.app/home",
    image: imgInventarioFacil,
    desc:"Full stack project, platform for keep your stock and sales in order."
  },
  {
    name: "Chiller",
    linkGithub: "https://github.com/JoseOrtega02/Chiller",
    linkDemo: "https://chillerv1.vercel.app/",
    image: imgChiller,
    desc:"Front end  project, page where you can search movies and watch their trailers."
  },
];

function ProjectItem({ project }) {
  return (
    <div className="flex flex-col justify-center gap-2 max-w-96">
      
      {/* Imagen del proyecto */}
      <div className="relative group">
        <img src={project.image} alt="project image" className="w-full rounded-md" />

        {/* Overlay al hacer hover */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
          <p className="mb-2 text-base px-4 text-center">
            {project.desc}
          </p>
          <div className="flex gap-2">
            <a
              href={project.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 text-base border-2 border-accent border-solid transition-all duration-300 hover:bg-accent hover:text-black"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>

      {/* Nombre del proyecto y botón de código */}
      <div className="flex justify-between items-center mt-2">
        <h1 className="font-slabo text-lg">{project.name}</h1>
        <a href={project.linkGithub} className="border-accent border-2 border-solid text-accent px-3 py-0.5 flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-accent hover:text-black group">
          <Code />
        </a>
      </div>
    </div>
  );
}

export default function RenderProjects() {
  return (
    <div className="mt-5 text-white flex flex-wrap gap-16 justify-center items-center max-w-4xl md:mx-auto md:justify-between">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
}

