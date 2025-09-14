import { motion } from "framer-motion"

export default function OurCourse() {
    return (
        <div className=" bg-primary">
            <motion.div

                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center flex-col mt-28 mb-12">
                <h1 className="font-poppins font-bold text-6xl text-primaryText">Our Course</h1>
                <p className="p-4 max-w-3xl text-center text-xl font-semibold text-gray-200">
                    Discover a complete trading program designed for all levels. Learn market
                    structure, risk management, and powerful strategies through interactive
                    lessons, live sessions, and practical tools. Gain confidence step by step
                    and start building your trading journey with expert guidance.
                </p>
            </motion.div>
        </div>
    )
}