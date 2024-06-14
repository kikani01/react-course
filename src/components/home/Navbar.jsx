import React from 'react'




function Navbar() {
  return (
    <div className="flex justify-between bg-black items-center h-[70px]">
      <h1 className='text-3xl text-yellow-200' >Indigo</h1>
        <ul className='text-1xl text-yellow-200 flex gap-6' >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar