import Header from "@/components/header"
import { Outlet } from "react-router-dom"
import Footer from "@/components/footer"

export const PublicLayout = ()=>{
    return (
        <div className="w-full">
            {/*handler to store the user data */}
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}