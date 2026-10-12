import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import BeARider from "../Pages/Shared/Navbar/Navdata/BeARider";
import PricingCalculator from "../Pages/Shared/Navbar/Navdata/PricingCalculator";
import AboutUs from "../Pages/Shared/Navbar/Navdata/AboutUs";
import CoverageSection from "../Pages/Shared/Navbar/Navdata/CoverageSection";
import Coverage from "../Pages/Shared/Navbar/Navdata/Coverage";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Regsiter/Register";
import Loading from "../Components/Loading/Loading";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/' , element:<Layout></Layout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/be-a-rider',
                element:<PrivateRoute><BeARider></BeARider></PrivateRoute>
            },
            {
                path:'/pricing',
                element:<PricingCalculator></PricingCalculator>
            },
            {
                path:'/services',
                element:<div className="mt-18">
                    <h2 className="text-2xl font-bold loading-spinner text-gray-700 text-center">this site is now under development</h2>
                    <h2 className="text-2xl font-bold text-white P-5 bg-primary text-center">this site is now under development</h2>
                    <Loading></Loading>
                </div>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/coverage',
                element:<Coverage></Coverage>,
                loader:()=> fetch('/src/Pages/Shared/Navbar/Navdata/servicesCenter.json').then(res => res.json())
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/test',
                element:<Loading></Loading>
            }
            
           

        ]
    }
])
export default router;