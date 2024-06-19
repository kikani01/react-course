import React from 'react'

function AboutUs(props) {
   if (props.imageFirst) {  
       return (
         <div>
          <h1 className="text-4xl text-center font-bold text-blue-700"  >{props.title}</h1>
          <div className="h-[300px] w-[100%] p-7 flex  justify-between  gap-[300px]">
             <img className="h-full rounded-md" src={props.img}  alt=""/>
             <div>
             <p className="font-medium ml-20 ">
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
             <p className="font-medium">
                {props.des} 
             </p>
              </div>
             <img className="h-full rounded-md" src={props.img}  alt=""/>
          </div>
         </div>
    )
   }
}

export default AboutUs