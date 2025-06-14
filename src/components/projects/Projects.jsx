
import RenderProjects from "./RenderProjects";

// eslint-disable-next-line react/prop-types
export default function Projects({lang}) {
  return (
    <section className="p-6 border-white border-b-2 border-solid md:py-20" id="projects">
      <h2 className="font-merriweatherSans text-white text-3xl max-w-4xl mx-auto">My work:</h2>
      <RenderProjects lang={lang} />
    </section>
  );
}

