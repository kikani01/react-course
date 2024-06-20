import React from 'react'

function Servicecard(props) {
  return (
    <div>
        <div className="p-3">
            <img className="rounded-lg" src={props.image} alt="" />
        </div>
        <div className="p-3">
        <h3 className="font-medium text-2xl ">{props.title}</h3>
        <p className="font-semibold">{props.desc}</p>
        </div>
    </div>
  )
}

export default Servicecard