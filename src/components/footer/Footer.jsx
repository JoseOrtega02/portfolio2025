
import Email from "../Icons/Email";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import socials from "../links"
export function Footer() {

const [linkedin, github, gmail] = socials;
  return (
    <div className="p-6 text-white flex justify-between max-w-4xl md:mx-auto md:py-12">
      <h1 className="font-merriweatherSans text-2xl">JO</h1>
      <div className="flex flex-row justify-center gap-4">
            <a href={linkedin} className='transition-all duration-300 ease-in-out hover:scale-105'><Linkedin /></a>
            <a href={github} className='transition-all duration-300 ease-in-out hover:scale-105'><Github /></a>
            <a href={gmail} className='transition-all duration-300 ease-in-out hover:scale-105'><Email /></a>
      </div>
    </div>
  );
}

