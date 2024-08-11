import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="bg-black text-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold mb-8 text-white relative inline-block">
                    About me
                    <span className="absolute left-0 -bottom-2 h-1 w-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg"></span>
                </h2>
                <motion.p
                    className="text-lg mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    I am an experienced Full Stack Developer with over 1.5 years of professional expertise in the field. Throughout my career, I have had the privilege of collaborating to ensure the success and growth of each project.
                </motion.p>
                <motion.p
                    className="text-lg mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    My passion for Full Stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { skill: "HTML & CSS", percentage: "90%" },
                        { skill: "Tailwind CSS", percentage: "85%" },
                        { skill: "JavaScript", percentage: "90%" },
                        { skill: "React JS", percentage: "90%" },
                        { skill: "Mongo DB", percentage: "80%" },
                        { skill: "Node JS", percentage: "85%" },
                        { skill: "Express JS", percentage: "80%" },
                        { skill: "Typescript", percentage: "70%" },
                        { skill: "Next JS", percentage: "75%" },
                        { skill: "PostgreSQL", percentage: "70%" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-4 rounded-lg shadow-lg bg-gray-800"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 + index * 0.1 }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-white font-medium">{item.skill}</span>
                                <span className="text-white">{item.percentage}</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="bg-gradient-to-r from-purple-500 to-orange-500 h-2.5 rounded-full"
                                    style={{ width: item.percentage }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
