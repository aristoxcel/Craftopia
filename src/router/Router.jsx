import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import AllACItem from "../page/AllACItem";
import DetailCard from "../page/DetailCard";
import AddCard from "../page/AddCard";
import MyACList from "../page/MyACList";
import Login from "../page/Login";
import SignUp from "../page/SignUp";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {path:'/',element:<Home></Home>, loader:()=>fetch('http://localhost:5000/craft')},

            {path:'/allitem',
            element:<AllACItem></AllACItem>, 
            loader:()=>fetch('http://localhost:5000/craft')},

            {path:'/card',element:<DetailCard></DetailCard>},
            {path:'/addcard',element:<AddCard></AddCard>},
            {path:'/mylist',element:<MyACList></MyACList>},
            {path:'/login',element:<Login></Login>},
            {path:'/signup',element:<SignUp></SignUp>},
        ]
    }
])