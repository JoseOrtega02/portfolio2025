
import Linkedin from '../Icons/Linkedin'
import Github from '../Icons/Github'
import Email from '../Icons/Email'
import Download from '../Icons/Download'

export default function Hero() {
  return (<div className='flex justify-center border-white border-solid border-b-2'>

 
    <div className='w-full max-w-4xl  p-6 py-8 flex flex-col gap-12' id='home'>
        <div className='flex flex-row justify-center md:hidden'>
            <Linkedin/>
            <Github/>
            <Email/>
        </div>
        <div className='text-white flex justify-between'> 
          <div>
          <h1 className=' text-5xl font-merriweatherSans md:text-6xl'>José Ortega</h1>
            <h4 className='text-base text-accent pl-3 font-istokWeb'>Desarrollador Web</h4>
            <p className='font-slabo text-base my-9 max-w-96 md:my-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.</p>
          </div>
          <div className='hidden md:flex flex-col gap-4 '>
            <a href="" className='transition-all duration-300 ease-in-out 
                       hover:scale-105'><Linkedin/></a>
            <a href="" className='transition-all duration-300 ease-in-out 
                       hover:scale-105'><Github/></a>
           <a href="" className='transition-all duration-300 ease-in-out 
                       hover:scale-105'><Email/></a> 
        </div>
        </div>

        <div className='flex flex-row justify-between mt-16'>
        <button className='font-istokWeb text-base text-accent border-2 border-accent border-solid px-8 py-2 
                       hover:bg-accent hover:text-black transition-all duration-300 ease-in-out 
                       '>
        Conoceme
    </button>
    <button
    className="flex flex-row gap-1 font-istokWeb text-base text-white border-2 border-white border-solid px-6 py-2 
               transition-all duration-300 ease-in-out hover:bg-white hover:text-black group"
  >
    CV
    <Download className="text-white group-hover:text-black transition-all duration-300" />
  </button>
        </div>
        
    </div>
    </div>
  )
}
