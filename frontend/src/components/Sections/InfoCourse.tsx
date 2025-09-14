import foto from "@/assets/img-course.jpg"
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "motion/react";

const features = [
    "Complete Set & Forget Strategy with step-by-step entry points.",
    "Weekly swing trades and signals shared every Sunday.",
    "Private Discord community for direct feedback and support.",
    "Proven psychological techniques to maintain consistency and discipline.",
    "Beginner-friendly initiation module to start from zero.",
    "Access to my Discord private community to get feedback directly from me.",
]

export default function InfoCourse() {
    return (

        <div className="flex items-center justify-center bg-primary">

            <div className="flex flex-col md:flex-row max-w-6xl max-h-2xl bg-secondary overflow-hidden">
                <div className="w-full md:w-1/2 flex items-center justify-center">

                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        src={foto} alt="course" className="w-96 h-96 mt-6 md:mt-0 md:w-full md:h-full object-cover" />
                </div>

                <div className="w-full md:w-1/2 col-lg-6 pt-4 pt-lg-0 content p-6">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-6 text-white font-poppins">FULL SET AND FORGET STRATEGY</motion.h2>

                    <hr className="m-2 text-white" />
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="text-xl text-primaryText font-semibold font-poppins ml-2">Total - $1,498.00</motion.p>
                    <hr className="mx-2 my-4 text-white" />
                    {features.map((feature, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 * index }}
                                viewport={{ once: true }}
                                key={index}
                                className="flex items-center font-poppins text-sm text-slate-100 mb-4"> <IoMdCheckmarkCircleOutline size={25} color="#4dd5ff" className="mr-2" /> {feature}</motion.div>
                        )
                    })}

                    <motion.div

                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        >
                        <Link to="/checkout" className="bg-primaryText hover:bg-primaryTextHover rounded-lg p-2 max-w-44 flex items-center justify-center mt-8 mb-4 text-gray-800">Proceed to Checkout</Link>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}