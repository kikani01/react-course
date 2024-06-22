import React from 'react'
import Navbar from '../components/home/Navbar'
import Content from '../components/home/Content'
import AboutUs from '../components/home/AboutUs'
import Service from '../components/home/Service'
import Pricing from '../components/home/Pricing'
import Progressrow from '../components/home/Progressrow'
import Teambar from '../components/home/Teambar'

function Home() {
  return (
    <div>
    <Navbar/>
    <Content/>
    <AboutUs title=" About Us" img="https://images.unsplash.com/photo-1566504182406-416ab1e86d5e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" des="Lorem ipsum dolor sit amet, consectetur elit. Amet excepturiiendis corporis consequuntur ipsum earum. Quaerat, voluptatibus" imageFirst={true}
    />

    <AboutUs title=" Our Story" img="https://images.unsplash.com/photo-1578589318274-02854f68813e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" des="Lorem ipsum dolor sit amet, consectetur elit. Amet excepturiiendis corporis consequuntur ipsum consectetur eli." />
    
    <Service/>
    <Pricing/>
    <Progressrow/>
    <Teambar/>
    </div> 


  )
}

export default Home   