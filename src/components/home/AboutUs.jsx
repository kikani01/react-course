import React from 'react'

function AboutUs(props) {
   if (props.imageFirst) {  
       return (
         <div className='mt-8'>
          <h1 className="text-4xl text-center font-bold text-blue-700"  >{props.title}</h1>
          <div className="h-[300px] w-[100%] p-7 flex  justify-between  gap-[300px]">
             <img className="h-full rounded-md" src={props.img}  alt=""/>
             <div>
             <p className="font-medium pl-10 ">
                {props.des} 
             </p>
              </div>
          </div>
         </div>
       )
   } 
   else{
    return (
    <div>
          <h1 className="text-4xl text-center font-bold text-blue-700" >{props.title}</h1>
          <div className="h-[300px] w-[100%] p-7 flex  justify-between  mt-5">
             <div>
             <p className="font-medium w-[500px]">
                {props.des} 
             </p>
              </div>
              <div className='w-[400px]'>
             <img className="h-full rounded-md w-full" src={props.img}  alt=""/>
             </div>
          </div>
         </div>
    )
   }
}

export default AboutUs