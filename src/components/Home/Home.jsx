import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-4xl px-4 py-8">
            <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-lg py-10 text-white shadow-lg">
                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-extrabold text-white">
                        I'm <span className="text-indigo-500">Tanish Kapoor</span>,<br />
                        Full Stack Developer
                    </h1>
                </motion.div>

                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <p className="text-gray-300">
                        Pune, India | 1.5 years experience
                    </p>
                </motion.div>

                <motion.div
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        className="w-40 h-40 rounded-full ring-4 ring-indigo-500 transform transition duration-300 hover:scale-105"
                        src="https://portfolio-tanish-2m8o.vercel.app/assets/profile_pic-EpDKUWCC.JPG"
                        alt="Profile Picture"
                    />
                </motion.div>

                <motion.div
                    className="flex flex-col items-center space-y-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Link
                        className="inline-flex justify-center items-center px-6 py-3 font-medium bg-indigo-500 rounded-lg hover:bg-indigo-600 transition duration-300 transform hover:scale-105"
                        to="#connect"
                    >
                        Connect with me
                    </Link>
                    <Link
                        className="inline-flex justify-center items-center px-6 py-3 font-medium border border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 transform hover:scale-105"
                        to="https://drive.google.com/file/d/1_lNZnPjRlPt2lNrqg0ZWkFpNj3tuuV_b/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Resume
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
