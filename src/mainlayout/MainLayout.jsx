import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* Header area */}
            <Header></Header>
            
            {/* Outlet area */}
            <Outlet></Outlet>

            {/* footer area */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;