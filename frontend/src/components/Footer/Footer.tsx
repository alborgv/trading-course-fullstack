import { FaXTwitter, FaDiscord, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="bg-primary">

                <div className="flex justify-between items-center pt-8 pb-6 px-4 sm:px-8 md:px-24">
                    <div className="flex space-x-4">
                        <a
                            href="https://x.com/X"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaXTwitter
                                onClick={() => { alert("This is a demo project. You will be redirected to the official X page.") }}
                                className="text-xl md:text-2xl text-primaryText hover:text-[#14171A] cursor-pointer " />
                        </a>
                        
                        <a
                            href="https://discord.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDiscord 
                                onClick={() => { alert("This is a demo project. You will be redirected to the official Discord page.") }}
                                className="text-xl md:text-2xl text-primaryText hover:text-[#7289da] cursor-pointer " />

                        </a>
                        
                        <a
                            href="https://www.instagram.com/instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram 
                                onClick={() => { alert("This is a demo project. You will be redirected to the official Instagram page.") }}
                                className="text-xl md:text-2xl text-primaryText hover:text-[#E1306C] cursor-pointer " />

                        </a>
                    </div>
                    <div className="flex space-x-2 text-white text-xs md:text-sm">
                        <Link to="/terms" className="hover:text-primaryText hover:underline cursor-pointer">Términos y condiciones</Link>
                        <Link to="/policies" className="hover:text-primaryText hover:underline cursor-pointer">Política de privacidad</Link>
                    </div>
                </div>
                <div className="flex justify-center pt-2 pb-4">
                    <span className="text-gray-400 text-sm">&copy; Copyright 2025 | All rights reserved</span>
                </div>
            </div>
        </>
    );
}
