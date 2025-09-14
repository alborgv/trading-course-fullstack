import { motion } from "framer-motion";

export default function Policies() {
    return (
        <div className="bg-secondary">
            <motion.div
                className="text-white px-6 md:px-56 lg:px-72 font-libre py-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-center text-2xl md:text-3xl font-bold italic mt-6 mb-10">
                    COURSE POLICIES
                </h1>

                <div className="text-sm">
                    <p className="mb-4">
                        The following policies are designed to ensure a safe, fair, and effective
                        learning environment for all students of our trading program. By enrolling,
                        you agree to abide by these guidelines.
                    </p>

                    <h2 className="text-lg font-semibold mt-8 mb-4">ATTENDANCE AND PARTICIPATION</h2>
                    <p className="mb-4">
                        Active participation in live sessions is highly encouraged. Repeated absence
                        from scheduled classes may affect your access to future mentorship opportunities.
                    </p>

                    <h2 className="text-lg font-semibold mt-8 mb-4">ACADEMIC INTEGRITY</h2>
                    <p className="mb-4">
                        Plagiarism, unauthorized sharing of course materials, or misrepresentation of
                        your own work is strictly prohibited. Any violation may result in suspension
                        or permanent removal from the program.
                    </p>

                    <h2 className="text-lg font-semibold mt-8 mb-4">USE OF MATERIALS</h2>
                    <p className="mb-4">
                        Course videos, PDFs, and trading tools are provided for personal educational use only.
                        Redistribution or resale of these materials is not allowed under any circumstances.
                    </p>

                    <h2 className="text-lg font-semibold mt-8 mb-4">COMMUNITY BEHAVIOR</h2>
                    <p className="mb-4">
                        Students are expected to maintain respectful communication in the community forums
                        and chat groups. Harassment, offensive language, or spam will not be tolerated.
                    </p>

                    <h2 className="text-lg font-semibold mt-8 mb-4">SUPPORT AND FEEDBACK</h2>
                    <p className="mb-4">
                        Technical support is available via email or live chat from Monday to Friday,
                        9:00 AM to 6:00 PM. We also welcome feedback to improve the learning experience.
                    </p>

                    <h2 className="text-lg font-semibold mt-8 mb-4">POLICY UPDATES</h2>
                    <p className="mb-4">
                        These policies are subject to revision at any time. Updates will be communicated
                        through the student dashboard and official email notifications.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
