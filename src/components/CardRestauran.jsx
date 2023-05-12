import React from 'react'
import CardDescription from './CardDescription'
import cards from "../assets/card.json"

const CardRestauran = () => {
  return (
    <div>
        {
            cards.map((card)=>{
                return <CardDescription title={card.title} subtitle={card.subtitle} key={card.id}/>
            })
        }
    </div>
  )
}

export default CardRestauran