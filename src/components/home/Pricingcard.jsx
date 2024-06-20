import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Pricingcard(props) {
  return (
    <div className='bg-blue-200 flex flex-col pl-16 pt-4' >
        <h3 className='text-2xl font-bold text-blue-500'>{props.title}</h3>
        <div>
        <p className='pt-4'>
            <sup className='text-2xl'>$</sup>
            <span className='text-5xl font-bold'>{props.price}</span>
            <span className='font-medium'>/month</span>
        </p>
        </div>
        <ul className='pt-4'>
          <li  className={`flex gap-2 items-center pt-2 ${
            props.features[1] ? "" : "line-through"
          }`}><FontAwesomeIcon icon={props.features[1] ? faCheck : faXmark} 
          className={`${
            props.features[1] ? "text-green-600" : "text-red-600"
          }`}
          
          
          />Quam adipiscing vitae proin</li>




<li  className={`flex gap-2 items-center pt-2 ${
            props.features[2] ? "" : "line-through"
          }`}><FontAwesomeIcon icon={props.features[2] ? faCheck : faXmark} 
          className={`${
            props.features[2] ? "text-green-600" : "text-red-600"
          }`}
          
          
          />Nec feugiat nisl pretium</li>

<li  className={`flex gap-2 items-center pt-2 ${
            props.features[3] ? "" : "line-through"
          }`}><FontAwesomeIcon icon={props.features[3] ? faCheck : faXmark} 
          className={`${
            props.features[3] ? "text-green-600" : "text-red-600"
          }`}
          
          
          />
Nulla at volutpat diam uteera</li>


<li  className={`flex gap-2 items-center pt-2 ${
            props.features[4] ? "" : "line-through"
          }`}><FontAwesomeIcon icon={props.features[4] ? faCheck : faXmark} 
          className={`${
            props.features[4] ? "text-green-600" : "text-red-600"
          }`}
          
          
          />Pharetra massa massa ultricies</li>


<li  className={`flex gap-2 items-center pt-2 ${
            props.features[5] ? "" : "line-through"
          }`}><FontAwesomeIcon icon={props.features[5] ? faCheck : faXmark} 
          className={`${
            props.features[5] ? "text-green-600" : "text-red-600"
          }`}
          
          
          />
Massa ultricies mi quis hendrerit</li>


        </ul>
    </div>
  )
}

export default Pricingcard