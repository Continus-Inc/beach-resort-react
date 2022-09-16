import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomLists from '../Components/RoomLists'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomContainer({context}){
const {Loading, sortedRooms, rooms} = context;
 if(Loading){
    return <Loading/>
 }
        return(
           <div>
        <RoomsFilter rooms={rooms}/>
        <RoomLists rooms={sortedRooms}/>
    </div>
        );
     }


export default withRoomConsumer(RoomContainer)



// import RoomsFilter from './RoomsFilter'
// import RoomLists from '../Components/RoomLists'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'

// export default function RoomsContainer() {

    
//   return (
//     <RoomConsumer>
//      {(value=>{
//    const{Loading, sortedRooms, rooms}= value;
//  if(Loading){
//     return <Loading/>
//  }
//         return(
//            <div>Hello from Room container
//         <RoomsFilter rooms={rooms}/>
//         <RoomLists rooms={sortedRooms}/>
//     </div>
//         )
//      })}

//     </RoomConsumer>


 
//   )
// }
