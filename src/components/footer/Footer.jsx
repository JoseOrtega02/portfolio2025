import Email from "../Icons/Email";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";

export  function Footer() {
  return (
    <div className="p-6 text-white flex justify-between max-w-4xl md:mx-auto md:p-0">
        <h1 className="font-merriweatherSans text-xl ">JO</h1>
         <div className='flex flex-row justify-center'>
                    <Linkedin/>
                    <Github/>
                    <Email/>
        </div>
    </div>
  )
}
