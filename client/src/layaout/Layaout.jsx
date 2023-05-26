import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Layaout = () => {
    return ( <section>
        <Navbar/>
        <Outlet/>
    </section> );
}
 
export default Layaout;