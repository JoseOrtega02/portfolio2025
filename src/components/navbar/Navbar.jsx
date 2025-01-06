
import { useState } from 'react'
import { Hamburger } from '../Icons/Hamburger'
import { Close } from '../Icons/Close'

function Navbar() {
  const [isOpen,setOpen] = useState(false)

  return (<> 
  <div className={isOpen?" text-white bg-black fixed w-full h-full z-10":"hidden"}>
      <button className="w-full flex justify-end  pr-9 py-5" onClick={()=>setOpen(false)}><Close/></button>
      <div className='flex flex-col gap-10 mt-28 items-center  h-full w-full font-istokWeb text-xl '>
         <a href="#home" onClick={()=>setOpen(false)}>Home</a>
      <a href='#projects' onClick={()=>setOpen(false)}>Projects</a>
      <a href='#techStack' onClick={()=>setOpen(false)}>Tech-Stack</a>
      </div>
     
    </div>
   <div className='w-full flex flex-row justify-between px-6 py-3 bg-black border-b-2 border-white border-solid'>
        <h1 className='text-white text-2xl'>JO</h1>
        <button onClick={()=>setOpen(true)}>
          <Hamburger/>
        </button>
    </div>
   
  </>
   
  )
}

export default Navbar