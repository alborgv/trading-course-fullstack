import Navbar from "components/Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }: ChildrenProps ) {
    return (
        <div className="grid grid-cols-1 h-screen overflow-hidden">
            <Navbar />
            <div className="flex-grow overflow-auto">
                <div className="grid grid-cols-1">
                    {children}
                </div>
            <Footer />
            </div>
        </div>
    )
}