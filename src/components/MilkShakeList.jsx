import React from 'react'
import CardRestauran from './CardRestauran'
import "./MilkShakeList.css"
const MilkShakeList = () => {
  return (
    <div>
        <div className='title-list'>
          <span >Milk Shakes</span>
        </div>
        <CardRestauran/>
    </div>
  )
}

export default MilkShakeList