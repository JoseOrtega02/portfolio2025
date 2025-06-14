const translation = {
  ES:{tittle:"Tecnologias:",moreSkills:"Mas Habilidades:"},
  EN:{tittle:"Tech Stack:",moreSkills:"More Skills:"}
}
const skillsList = {
  ES: [
    "Agile",
    "S.O.L.I.D",
    "Algoritmos",
    "Estructuras de Datos",
    "Arquitectura Limpia",
    "Código Limpio",
    "Inglés B2"
  ],
  EN: [
    "Agile",
    "S.O.L.I.D",
    "Algorithms",
    "Data Structures",
    "Clean Architecture",
    "Clean Code",
    "English B2"
  ]
};
// eslint-disable-next-line react/prop-types
export default function TechStack({lang}) {
  return (
    <section className="border-white border-b-2 border-solid" id="techStack">
      <div className="p-6 max-w-4xl mx-auto md:p-0 md:py-20">
        <h2 className="font-merriweatherSans text-3xl text-white">{translation[lang].tittle}</h2>
        <div className="flex flex-wrap text-white mt-8 justify-between md:gap-y-8 gap-4">
          <div className="max-w-96 w-full">
            <h3 className="font-merriweatherSans text-2xl">Front End:</h3>
            <ul className="text-end font-slabo text-lg">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>tailwind</li>
              <li>Figma</li>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>Zustand.js</li>
              <li>Redux.js</li>
            </ul>
          </div>
          <div className="max-w-96 w-full">
            <h3 className="font-merriweatherSans text-2xl">Back End:</h3>
            <ul className="text-end font-slabo text-lg">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Jest</li>
              <li>Zod</li>
              <li>Mongoose</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="max-w-96 w-full">
            <h3 className="font-merriweatherSans text-2xl">{translation[lang].moreSkills}</h3>
            <ul className="text-end font-slabo text-lg">
              {skillsList[lang].map((e,index)=><li key={index}>{e}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

