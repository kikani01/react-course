import React from 'react'
import Navbar from '../components/home/Navbar'
import Content from '../components/home/Content'
import AboutUs from '../components/home/AboutUs'
import Service from '../components/home/Service'

function Home() {
  return (
    <div>
    <Navbar/>
    <Content/>
    <AboutUs title=" About us" img="https://images.unsplash.com/photo-1689602037070-fec2eca3f5b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" des="Lorem ipsum dolor sit amet, consectetur elit. Amet excepturiiendis corporis consequuntur ipsum earum. Quaerat, voluptatibus" imageFirst={true}
    />

    <AboutUs title=" our story" img="https://images.unsplash.com/photo-1689602037070-fec2eca3f5b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" des="Lorem ipsum dolor sit amet, consectetur elit. Amet excepturiiendis corporis consequuntur ipsum consectetur eli." />
    
    <Service/>
    </div> 


  )
}

export default Home  