import React, { useState } from 'react';
import { CheckCircle2, XCircle } from "lucide-react";
import { useBContext } from '@/context/Context';
import toast from "react-hot-toast";
import { motion } from 'motion/react';

export default function Contact() {
    const { sendContact } = useBContext();

    const [formData, setFormData] = useState<ContactFormProps>({
        name: "",
        email: "",
        message: ""
    })

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setError('');
        setShowError(false);

        if (!formData.name || !formData.email || !formData.message) {
            setError('Please complete all fields');
            setShowError(true);
            return;
        }

        if (!formData.email.includes('@')) {
            setError('Please enter a valid email');
            setShowError(true);
            return;
        }

        setIsLoading(true);

        const res = await sendContact(formData);

        if (res.success) {
            toast.custom((t) => (
                <div
                    className={`${t.visible ? "animate-enter" : "animate-leave"
                        } max-w-sm w-full bg-white rounded-2xl shadow-lg pointer-events-auto flex ring-1 ring-black/5 p-4`}
                >
                    <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-900">
                            We've received your request 🚀
                        </p>
                        <p className="text-sm text-gray-500">Thanks for getting in touch, we'll reply soon.</p>
                    </div>
                </div>
            ))
            setFormData({ name: "", email: "", message: "" })
        } else {

            toast.custom((t) => (
                <div
                    className={`${t.visible ? "animate-enter" : "animate-leave"
                        } max-w-sm w-full bg-white rounded-2xl shadow-lg pointer-events-auto flex ring-1 ring-black/5 p-4`}
                >
                    <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-900">
                            Error
                        </p>
                        <p className="text-sm text-gray-500">There was a problem, try again.</p>
                    </div>
                </div>
            ))
        }
        setIsLoading(false);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary bg-gradient-to-b from-neutral-800/30 via-black/10 to-neutral-800/30 px-4">
            <div className="w-full max-w-xl py-20">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-blue-950 border-2 border-l-0 border-r-0 border-t-primaryText border-b-primaryText p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-neutral-200 mb-3">
                            CONTACT
                        </h2>
                        <p className="text-neutral-300 text-sm">
                            Please don't hesitate to contact us with any questions or concerns. We're here to assist you.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {showError && (
                            <div className="p-3 bg-red-900/30 border border-red-600/50 rounded-md animate-pulse">
                                <p className="text-red-200 text-sm flex items-center">
                                    <span className="mr-2">⚠️</span>
                                    {error}
                                </p>
                            </div>
                        )}
                        <div className='grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-6'>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-200 mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border text-white bg-neutral-800/50 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryText focus:border-transparent transition-colors"
                                    placeholder="Name"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-200 mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border text-white bg-neutral-800/50 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryText focus:border-transparent transition-colors"
                                    placeholder="Email"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-200 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border text-white bg-neutral-800/50 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryText focus:border-transparent transition-colors"
                                placeholder="Message"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`bg-primaryText hover:bg-primaryTextHover text-neutral-200 font-medium py-2 px-10 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primaryText focus:ring-offset-2 flex items-center gap-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                                    }`}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin h-4 w-4 border-2 border-neutral-200 border-t-transparent rounded-full"></div>
                                        Validating...
                                    </>
                                ) : (
                                    'Send message'
                                )}
                            </button>

                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};