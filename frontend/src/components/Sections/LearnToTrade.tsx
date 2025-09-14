import banner from "@/assets/banner-trading.jpg"
import bannerCel from "@/assets/banner-trading-cel.jpg"
import { Link } from "react-router-dom"

export default function LearnToTrade() {
    return (
        <>
            <div className="relative flex items-center justify-center h-screen bg-gradient-to-t from-secondary to-primary">
                <div 
                    className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
                    style={{
                        backgroundImage: `url(${banner})`
                    }}
                ></div>
                <div 
                    className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
                    style={{
                        backgroundImage: `url(${bannerCel})`
                    }}
                ></div>
                <div className="absolute inset-0"></div>
                <div className="relative z-10 text-white text-center p-4">
                    <span className="text-xl font-bold text-primaryText">LEARN. TRADE. EARN.</span>
                    <h1 className="text-5xl font-bold mt-4 font-poppins">LEARN TO TRADE</h1>
                    <p className="mt-6 mb-12 text-lg">Master the markets, grow your wealth. <br /></p>

                    <Link to="/course" className="bg-primaryText text-stone-800 font-poppins font-semibold px-8 py-4 rounded-lg hover:bg-primaryTextHover cursor-pointer">
                        Get started now ➜
                    </Link>
                </div>
            </div>
        </>
    )
}