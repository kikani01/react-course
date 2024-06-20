import React from 'react'
import Pricingcard from './Pricingcard'

function Pricing() {
  return (
    <div>
        <h1 className='text-4xl font-bold text-center text-blue-700 mt-8'>Pricing</h1>
        <div className='grid grid-cols-3  mt-[30px] gap-6 p-8'>
            <Pricingcard title="Free Plan" price="0" 
            features={{
                1 : true,
                2 : true,
                3 : true,
                4 : false,
                5 : false,
            }}/>
              <Pricingcard title="Bussiness Plan" price="29" 
            features={{
                1 : true,
                2 : true,
                3 : true,
                4 : true,
                5 : false,
            }}/>
              <Pricingcard title="Developer Plan" price="49" 
            features={{
                1 : true,
                2 : true,
                3 : true,
                4 : true,
                5 : true,
            }}/>
        </div>
    </div>
  )
}

export default Pricing