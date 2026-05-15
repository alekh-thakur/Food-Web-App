import { NavLink } from "react-router-dom";

const NavBar = () =>{
    const navigations = ["Home","About","Contact","Grocery"];
    const routes = ["/","/about","/contact","/grocery"]
    return(
        <div className="flex p-6 shadow-md">
            {
                navigations.map((i,index) =>(
                    <div key={index} className="px-5 ">
                        <NavLink to={routes[index]}
                        className={({isActive})=>`font-medium text-[18px]
                        ${isActive ? "border-b-4 border-orange-400":""}`}>
                        {i}
                        </NavLink>                
                    </div>
                ))
            }
        </div>
    )   
}
export default NavBar;