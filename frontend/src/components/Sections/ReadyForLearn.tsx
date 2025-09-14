import BannerBlur from "@/assets/banner-blur.jpg";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function ReadyFroLearn() {
    return (
        <article className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border-4 border-white mb-20">
            <div className="absolute inset-0">
                <img 
                    src={BannerBlur} 
                    alt="bannerblur" 
                    className="w-full h-full object-cover blur-sm"
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 px-4 py-16 lg:p-16 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-36">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left">
                    <h5 className="text-5xl lg:text-7xl text-white NHMedium tracking-[-2px] lg:NHBold capitalize">
                        Ready For Learn?
                    </h5>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="mx-2">
                    <Link to="/course">
                        <button className="justify-center lg:justify-start w-full lg:w-auto NHBold border-white border-[1px] bg-white py-4 px-8 text-2xl rounded-full transition-all duration-500 hover:text-neutral-400 cursor-pointer">
                            <div className="flex items-center gap-8 justify-center">
                                Views plans
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                </svg>
                            </div>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </article>
    );
}