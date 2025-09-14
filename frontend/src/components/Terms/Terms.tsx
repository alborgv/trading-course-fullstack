import { motion } from "motion/react";

export default function Terms() {
    return (
        <div className="bg-secondary">
            <motion.div
                className="bg-secondary text-white px-6 md:px-56 lg:px-72 font-libre py-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-center text-2xl md:text-3xl font-bold italic mt-6 mb-10">
                    TRADING COURSE TERMS AND CONDITIONS
                </h1>

                <h2 className="text-center text-xs md:text-sm font-libre font-bold mt-12 mb-8">
                    PLEASE READ THESE TERMS CAREFULLY BEFORE PURCHASING OUR TRADING COURSE.
                </h2>

                <div className="text-sm">

                    <p className="mb-4">
                        These Terms constitute a legally binding agreement between you and
                        Easy wings. By making payment and accessing the content, you confirm that you have read,
                        understood, and agree to comply with all the terms set forth herein.
                    </p>

                    <p className="mb-4">
                        <strong>IMPORTANT NOTICE:</strong> Trading financial instruments involves a high level
                        of risk and may not be suitable for all investors. You may lose more than
                        your initial investment. Never invest money you cannot afford to lose.
                    </p>

                    <p className="mb-4">
                        <strong>Changes to Terms:</strong> We reserve the right to modify these
                        terms at any time. Changes will take effect immediately after being published
                        on our platform. It is your responsibility to review these terms periodically.
                    </p>

                    <p className="mb-4">
                        <strong>Refund Policy:</strong> Due to the digital nature of the content, we offer
                        a 30-day money-back guarantee from the date of purchase, provided you have not
                        completed more than 25% of the course.
                    </p>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">COURSE ACCESS AND USE</h2>

                <div className="text-sm">
                    <p className="mb-4">
                        <strong>License of Use:</strong> You are granted a personal, non-transferable, and non-exclusive
                        license to access and use the course content for your personal and educational purposes only.
                        This license does not include the right to resell, distribute, or reproduce the content.
                    </p>

                    <p className="mb-4">
                        <strong>Platform Access:</strong> Access to the course will be available for 12 months
                        from the date of purchase. After this period, access may require renewal.
                    </p>

                    <p className="mb-4">
                        <strong>Technical Requirements:</strong> A stable internet connection and a compatible device
                        are required to access the content. We are not responsible for technical issues that may
                        prevent you from accessing the course.
                    </p>

                    <p className="mb-4">
                        <strong>Prohibited Use:</strong> The following actions are strictly prohibited:
                    </p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Sharing your login credentials with third parties</li>
                        <li>Downloading, copying, or distributing the course content</li>
                        <li>Reverse engineering our materials</li>
                        <li>Using the content to create competing courses</li>
                        <li>Recording, screen capturing, or reproducing the content</li>
                    </ul>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">DISCLAIMER</h2>

                <div className="text-sm">
                    <p className="mb-4">
                        <strong>Educational Purpose:</strong> This course is intended exclusively for educational purposes
                        and does not constitute personalized financial advice. The strategies and techniques taught are
                        for learning purposes only.
                    </p>

                    <p className="mb-4">
                        <strong>No Guaranteed Results:</strong> We do not guarantee that applying the strategies
                        taught will result in profits. Past results do not guarantee future performance.
                        Trading may lead to significant losses.
                    </p>

                    <p className="mb-4">
                        <strong>User Responsibility:</strong> You are fully responsible for your trading and investment
                        decisions. It is strongly recommended that you consult with a qualified financial advisor
                        before making any investment.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-lg font-semibold mt-8 mb-4">INTELLECTUAL PROPERTY</h2>
                    <p className="mb-4 text-sm">
                        All course content, including but not limited to videos, texts, graphics, logos,
                        trading strategies, custom indicators, and educational materials, is the exclusive property
                        of Easy wings and is protected by copyright and intellectual property laws.
                        Any unauthorized use constitutes a violation of these rights.
                    </p>
                </div>
                
                <div className="mb-12">
                    <h2 className="text-lg font-semibold mt-8 mb-4">COMMUNITY AND SUPPORT</h2>
                    <p className="mb-4 text-sm">
                        Access to our private Discord community is included with the purchase of the course. We reserve
                        the right to remove any member who violates community rules, including spam,
                        disrespectful behavior, or promotion of competing services. Technical support is available
                        Monday to Friday from 9:00 AM to 6:00 PM standard time.
                    </p>
                </div>
                
                <div className="mb-12 md:mb-20">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold mt-6 md:mt-8 mb-3 md:mb-4">LIMITATION OF LIABILITY</h2>
                    <p className="text-xs sm:text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, EASY WINGS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
                        INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES RESULTING FROM THE USE OR INABILITY TO USE THE COURSE,
                        INCLUDING BUT NOT LIMITED TO BUSINESS OR INVESTMENT LOSSES.
                    </p>
                    
                    <p className="text-xs sm:text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                        <strong>Contact:</strong> For any questions about these terms, you may contact us at
                        support@easywings.com or through our contact form on the website.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
