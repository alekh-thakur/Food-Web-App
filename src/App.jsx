import 'remixicon/fonts/remixicon.css'
import NavBar from './components/FoodDeliverapp/NavBar'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Children } from 'react'
import Home from './components/FoodDeliverapp/Home'
import About from './components/FoodDeliverapp/about'
import Contact from './components/FoodDeliverapp/Contact'
import Grocery from './components/FoodDeliverapp/Grocery'
import RestPage from './components/FoodDeliverapp/RestPage'


const Layout = () =>{
  return(
    <div>
      <NavBar/>
      <Outlet/>
    </div> 
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,

    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/restaurant/:restaurantID",
        element:<RestPage/>
      },
     
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Grocery/>
      },
    ]
    
  }
])

const App = () =>{
  return <RouterProvider router={appRouter}/>
}
export default App
