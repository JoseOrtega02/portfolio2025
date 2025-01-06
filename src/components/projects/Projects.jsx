import RenderProjects from "./RenderProjects";


export default function Projects() {
  return (
    <div className="p-6 border-white border-b-2 border-solid" id="projects">
        <h2 className="font-merriweatherSans text-white text-2xl">My work:</h2>
        <RenderProjects/>
    </div>
  )
}
