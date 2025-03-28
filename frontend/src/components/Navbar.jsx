import React from 'react'
import { useAuthStore } from '/store/useAuthStore.js' 
import { Link } from 'react-router-dom'
import { MessageSquare } from 'lucide-react'

const Navbar = () => {
  const {logout, authUser} = useAuthStore()
  return (
     <header className=' border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80'>
        <div className='container mx-auto px-4 h-16 '>
          <div className='flex justify-between items-center h-full'> 
            <Link to="/" className='flex items-center gap-2.5 hover:opacity-80 transition-all'>
            <div className='w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center '>
              <MessageSquare/>
            </div>
            <h1 className='w-5 h-5 text-primary'> Chattup</h1>
            </Link>

          </div>
        </div>
     </header>
  )
}

export default Navbar