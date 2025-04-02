// import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './ui/nav'

//components
const Header =()=>{
   return(<Header className="py-8 xl:py-12 text-white">
    <div className='container.mx-auto'>
        {/*logo*/}
        <Link href={'/'}>
        <h1 className='text-4xl font-semibold'>
            Ashish<span className='text-accent'>.</span>
        </h1>
        </Link>
        {/* desktop nav*/ }
        <Nav />
    </div>
    </Header>
   );
}

export default Header;