import RenderProjects from "./RenderProjects";


export default function Projects() {
  return (
    <section className="p-6 border-white border-b-2 border-solid md:py-20" id="projects">
        <h2 className="font-merriweatherSans text-white text-2xl max-w-4xl mx-auto">My work:</h2>
        <RenderProjects/>
    </section>
  )
}
