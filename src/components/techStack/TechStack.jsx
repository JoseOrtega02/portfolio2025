

export default function TechStack() {
  return (
    <section className=" border-white border-b-2 border-solid" id="techStack">

    
    <div className="p-6 max-w-4xl mx-auto md:p-0 md:py-20" >
        <h2 className="font-merriweatherSans text-2xl text-white">Tech Stack:</h2>
        <div className="flex flex-wrap text-white mt-8 justify-between md:gap-y-8 gap-4">
            <div className="max-w-96 w-full">
                <h3 className="font-merriweatherSans text-xl">Front End:</h3>
                <ul className="text-end font-slabo text-base">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Figma</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Zustand.js</li>
                    <li>Redux.js</li>
                </ul>
            </div>
            <div className="max-w-96 w-full">
            <h3 className="font-merriweatherSans text-xl">Back End:</h3>
                <ul className="text-end font-slabo text-base">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>Jest</li>
                    <li>Zed</li>
                    <li>Mongoose</li>
                </ul>
            </div>
            <div className="max-w-96 w-full">
            <h3 className="font-merriweatherSans text-xl">More Skills:</h3>
                <ul className="text-end font-slabo text-base">
                    <li>Agile</li>
                    <li>Clean Architecture</li>
                    <li>S.O.L.I.D</li>
                    <li>Clean code</li>
                </ul>
            </div>
        </div>
    </div>
    </section>
  )
}
