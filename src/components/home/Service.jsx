import React from 'react'
import Servicecard from './Servicecard'


function Service() {
  return (
    <div>
        <h1 className="text-4xl text-center font-bold text-blue-800 p-8">Service</h1>
        <div className="grid grid-cols-4">
            <Servicecard image="https://images.unsplash.com/photo-1718301166305-421b59a63acf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Lorem" desc=" excepturiiendis corporis consequuntur ipsum earum. Quaerat, voluptatibus" />
            <Servicecard image="https://images.unsplash.com/photo-1718062455464-75f9a6375127?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Lorem" desc=" excepturiiendis corporis consequuntur ipsum earum. Quaerat, voluptatibus" />
            <Servicecard image="https://images.unsplash.com/photo-1582971103098-bfc707d2ad92?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Lorem" desc=" excepturiiendis corporis consequuntur ipsum earum. Quaerat, voluptatibus" />
            <Servicecard image="https://images.unsplash.com/photo-1628526498666-add5eddf65df?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Lorem" desc=" excepturiiendis corporis consequuntur ipsum earum. Quaerat, voluptatibus" />
        </div>
    </div>
  )
}

export default Service