const FilterDropDown = ({filterByRating,filterByTime,items}) =>{
     
    return(
        <div className="shadow-md absolute bg-white p-2 rounded-xl w-50 left-6 top-11 z-1000 text-[18px]">
            
            <div className="p-1 ">
                <button className="cursor-pointer" onClick={filterByTime}>Delivery Time</button>
            </div>
            <div className="p-1">
                <button className=" cursor-pointer" onClick={filterByRating} >Rating</button>
            </div>
        </div>
    )
}
export default FilterDropDown