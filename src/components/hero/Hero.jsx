
import Linkedin from '../Icons/Linkedin'
import Github from '../Icons/Github'
import Email from '../Icons/Email'
import socials from "../links"
import { DownloadButton } from './DownloadButton'
const translation = {
  ES:{role:"Desarrollador Web",desc:"Construyo aplicaciones web hermosas y funcionales, con código limpio, diseño inteligente y un enfoque en resolver problemas de manera eficiente.",btn:"Conoceme"},
  EN:{role:"Web Developer",desc:"I build beautiful and functional web apps with clean code, smart design, and a focus on solving problems efficiently.",btn:"Know me"}
}
// eslint-disable-next-line react/prop-types
export default function Hero({lang}) {
const [linkedin, github, gmail] = socials;
  return (
    <section className='flex justify-center border-white border-solid border-b-2' id='home'>
      <div className='w-full max-w-4xl p-6 py-8 md:py-20 flex flex-col gap-12'>
        
        {/* Iconos móviles */}
        <div className='flex flex-row justify-center md:hidden'>
            <a href={linkedin} className='transition-all duration-300 ease-in-out hover:scale-105'><Linkedin /></a>
            <a href={github} className='transition-all duration-300 ease-in-out hover:scale-105'><Github /></a>
            <a href={gmail} className='transition-all duration-300 ease-in-out hover:scale-105'><Email /></a>
        </div>

        {/* Texto principal e iconos en desktop */}
        <div className='text-white flex justify-between'> 
          <div>
            <h1 className='text-6xl font-merriweatherSans md:text-7xl'>José Ortega</h1>
            <h4 className='text-lg text-accent pl-3 font-istokWeb'>{translation[lang].role}</h4>
            <p className='font-slabo text-lg my-9 max-w-96 md:my-12'>{translation[lang].desc}</p>
          </div>
          
          <div className='hidden md:flex flex-col gap-4'>
            <a href={linkedin} className='transition-all duration-300 ease-in-out hover:scale-105'><Linkedin /></a>
            <a href={github} className='transition-all duration-300 ease-in-out hover:scale-105'><Github /></a>
            <a href={gmail} className='transition-all duration-300 ease-in-out hover:scale-105'><Email /></a>
          </div>
        </div>

        {/* Botones */}
        <div className='flex flex-row justify-between mt-16'>
          <a href='#projects' className='font-istokWeb text-lg text-accent border-2 border-accent border-solid px-8 py-2 
                             hover:bg-accent hover:text-black transition-all duration-300 ease-in-out'>
            {translation[lang].btn}
          </a>

          <DownloadButton lang={lang} />
        </div>
        
      </div>
    </section>
  )
}

