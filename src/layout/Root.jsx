import { Outlet } from "react-router-dom"
import Header from "../content/Header"
import Footer from "../content/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Root() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root