import React from 'react'
import Room from '../Components/Room'

export default function RoomLists({rooms}) {
if(rooms.length === 0){
    return (
        <div className="empty-search">
            <h4>unfortunately no room match your search</h4>
        </div>
    )
}
  return (
    <section className='roomslist'>
        <div className="roomslist-center">
     {rooms.map(item=>{
    return (<Room key={item.id} room={item}/>)
   })}
        </div>
   

    </section>
    
  )
}
