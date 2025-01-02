
import Linkedin from '../Icons/Linkedin'
import Github from '../Icons/Github'
import Email from '../Icons/Email'
import Download from '../Icons/Download'

export default function Hero() {
  return (
    <div className='width-full p-6 flex flex-col gap-12 border-white border-solid border-b-2'>
        <div className='flex flex-row justify-center'>
            <Linkedin/>
            <Github/>
            <Email/>
        </div>
        <div className='text-white'> 
            <h1 className=' text-5xl font-merriweatherSans'>José Ortega</h1>
            <h4 className='text-base text-accent pl-3 font-istokWeb'>Desarrollador Web</h4>
            <p className='font-slabo text-base my-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.</p>
        </div>

        <div className='flex flex-row justify-between mt-16'>
            <button className='font-istokWeb text-base text-accent border-2 border-accent border-solid px-8 py-2'>Conoceme</button>
            <button className='flex flex-row gap-1 font-istokWeb text-base text-white border-2 border-white border-solid px-4 py-2 '>CV <Download/></button>
        </div>
        
    </div>
  )
}
