import { Outlet } from "react-router-dom"
import Navbar from "./components/navBar"

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    
    </>
  )
}

export default MainLayout