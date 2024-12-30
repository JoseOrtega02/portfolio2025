
import { Hamburger } from '../Icons/Hamburger'

function Navbar() {
  return (
    <div className='w-full flex flex-row justify-between px-6 py-3 bg-black border-b-2 border-white border-solid'>
        <h1 className='text-white text-2xl'>JO</h1>
        <Hamburger/>
    </div>
  )
}

export default Navbar