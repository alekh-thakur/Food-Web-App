
import RestuarentList from "./RestuarentList";

const Home = () =>{
   
    
    return(
        <div className="mt-20 text-2xl font-bold ">
            <div className="ml-5">
                <h1>Restuarents with food delivery online</h1>
            </div>
            <div>
                <RestuarentList/>
            </div>
        </div>
    )
}

export default Home;