import React from 'react'
import Teamcard from './Teamcard'

function Teambar() {
  return (
    <div>
          <h1 className='text-4xl font-bold text-center text-blue-700 mt-8'>Team</h1>
          <div className='grid grid-cols-2 p-8'>
        <Teamcard image="/video/one.png" name="Anil Kpoor" post="Chief Executive Officer" desc="Explicabo voluptatem mollitia et repellat qui dolorum quasi"/>
        <Teamcard image="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-170195-1036623.jpg&fm=jpg" name="Sarah Jhonson" post="Product Manager" desc="Aut maiores voluptates amet et quis praesentium qui senda para"/>
        <Teamcard image="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" name="William Anderson" post="CTO" desc="Quisquam facilis cum velit laborum corrupti fuga rerum quia"/>
        <Teamcard image="https://i.pinimg.com/474x/4c/28/ec/4c28ec4b253fe5102c40a1cf03f53151.jpg" name="Amanda Jepson" post="Accountant" desc="Dolorum tempora officiis odit laborum officiis et et accusamus"/>
        </div>
    </div>
  )
}

export default Teambar