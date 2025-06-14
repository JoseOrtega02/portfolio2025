import {useState} from "react"
import { Footer } from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import TechStack from './components/techStack/TechStack'


function App() {
const [lang,setLang] = useState("ES")

 const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'ES' : 'EN'));
    console.log(lang)
  };
  return (
   <>
   <Navbar lang={lang} setLang={toggleLanguage} />
   <Hero lang={lang}/>
   <Projects lang={lang}/>
   <TechStack lang={lang}/>
   <Footer/>
   </>
  )
}

export default App
