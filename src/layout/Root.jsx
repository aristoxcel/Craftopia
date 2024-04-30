import { Outlet, useLocation } from "react-router-dom"
import Header from "../content/Header"
import Footer from "../content/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
AOS.init();

function Root() {

    // dynamic title
    const loc= useLocation();
    useEffect(()=>{
      if (loc.pathname==='/') {
        document.title= 'Craftopia | Home'
      }
      else {
        document.title = `Craftopia  ${loc.pathname.replace('/', '| ')}`
      }
      if (loc.pathname==='/allitem') {
        document.title= 'Craftopia | All category item'
      }
      if (loc.pathname==='/addcard') {
        document.title= 'Craftopia | Add to Card'
      }
      if (loc.state) {
        document.title= `Carftopia|| ${loc.state}`;
      }
    },[loc.pathname, loc.state]);
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root