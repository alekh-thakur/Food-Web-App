import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/Constants";
import FilterDropDown from "./FilterDropDown";
const RestuarentList = () => {
    const[items,setItems] = useState([]);
    const[itemsCopy,setItemsCopy] = useState([]);
    const[inputVal, setInputVal] = useState("");
    const[show,setShow] = useState(false);
    const fetchData = async () => {
      try {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const res = await data.json();
        setItems(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setItemsCopy(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
        console.error("Failed to fetch restaurant data:", error);
      }
    }

    const searchRes = () =>{
      const filterData = items.filter((res)=>
      res.info.name.toLowerCase().includes(inputVal.toLowerCase()));

      setItemsCopy(filterData);
    }  

    const filterByTime = () =>{
          const time = [...items].sort(
            (a,b)=> a.info.sla.deliveryTime - b.info.sla.deliveryTime
          )
          setItemsCopy(time)
        }
     const filterByRating = () =>{
          const rating = [...items].sort(
            (a,b)=> b.info.avgRating - a.info.avgRating
          )
          setItemsCopy(rating)
        }

    useEffect(() => {
      if (inputVal === "") {
        setItemsCopy(items);
      }
    }, [inputVal, items]);

    useEffect(()=>{        
        fetchData();
    },[]) 

    if (items.length===0) return <Shimmer/>
    return (
    <div className="mx-2">
      <div className="ml-2 my-6  flex items-center">
        <div>
          <input type="text" value={inputVal} className="font-medium text-[18px] shadow-md p-2 rounded-l-xl"  onChange={(e)=>setInputVal(e.target.value)} placeholder="Search restaurants....."/>
        <button onClick={searchRes} className="cursor-pointer text-[18px] rounded-r-xl p-2 shadow-md  font-medium">Search</button>
        </div>
        <div className="relative">
          <button onClick={()=> setShow(!show)} className="cursor-pointer text-[18px] rounded-xl p-2 ml-5 shadow-md  font-medium">Sort By</button>
          {
            show && <FilterDropDown
            filterByRating = {filterByRating}
            filterByTime= {filterByTime}
            />
          }
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-5">
      {
        itemsCopy.map((restuarant)=>(
            <div key={restuarant.info.id}
            className="p-2 mx-3 my-3 px-4 py-6 hover:-translate-y-2 transition-all duration-100 rounded-xl">
                <Link to={`/restaurant/${restuarant.info.id}`}>
                <img className="h-80 w-full rounded-xl" src={CDN_URL+restuarant.info.cloudinaryImageId} alt="" />
                <h1 className="mt-4">{restuarant.info.name}</h1>
                <p className="text-[15px] font-medium">{restuarant.info.avgRating} • {restuarant.info.sla.deliveryTime}mins</p>
                <h2 className="text-[17px] opacity-60">{(restuarant.info.cuisines).join(',')}</h2>
                <p className="text-[18px] opacity-60">{restuarant.info.locality}</p>
                </Link>
            </div>
        ))
      }      
    </div>
    </div>
  )
}

export default RestuarentList
