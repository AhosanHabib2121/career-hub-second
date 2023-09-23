import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* Header area */}
            <Header></Header>

            {/* Outlet area */}
            <div className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>

            {/* footer area */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;