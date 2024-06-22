import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Teamcard(props) {
  return (
    <div>
        
          <div className='h-[200px] shadow-2xl m-10 flex '>
         <div>
            <img className='h-[200px] w-[200px] rounded-[50%] p-3 object-cover' src={props.image} alt="" />
         </div>
         <div className='p-6'>
            <h2 className='text-2xl font-bold text-blue-800'>{props.name}</h2>
            <p className='font-medium p-1'>{props.post}</p>
            <p className='p-1 text-gray-600 font-medium'>{props.desc}</p>
            <div className='flex gap-6 text-2xl p-2 rounded-full ' >
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
            </div>
         </div>
         </div>
    </div>
  )
}

export default Teamcard