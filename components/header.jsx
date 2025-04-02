// import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './nav'

//components
const Header =()=>{
   return(<Header className="py-8 xl:py-12 text-white">
    <div className='container.mx-auto flex justify-between items-center'>
        {/*logo*/}
        <Link href='/'>
        <h1 className='text-4xl font-semibold'>
            Ashish<span className='text-accent'>.</span>
        </h1>
        </Link>



        {/* desktop nav* & hire me button */ }




        <div className='hidden xl:flex items-center gap-8'>
            <Nav />
            <Link href="/contact">
            <Button>Hire Me</Button>
            </Link>
        </div>
        {/* mobile nav & hire me button */}
        <div className='xl:hidden'>
            mobile nav
            </div>
    </div>
    </Header>
   );
}

export default Header;