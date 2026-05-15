import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RestPage = () => {
    const [restuarant,setRestuarant] = useState(null);
    const {restaurantID} = useParams();
    useEffect(()=>{
        const fetchRestaurant = async () =>{
           try{
             const data = await fetch(``)
             const res = await data.json();
             setRestuarant(res);
           }catch(err){
            console.log("Failed to fetch restaurant data",err);
            
           }
        }
        fetchRestaurant();        
    },[restaurantID])

    if(!restuarant){
        return <h2>Loading resturant details...</h2>
    }
  return (
    <div className='flex justify-center items-center flex-col mt-5'>
      <h1 className='text-6xl font-bold'>{restuarant.restaurantName}</h1>
      <h2 className="text-[15px] mt-5 font-bold">{restuarant.type}</h2>
      <p>{restuarant.address}</p>
    </div>
  )
}

export default RestPage
