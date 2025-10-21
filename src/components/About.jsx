import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          className="pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </motion.div>

        <motion.p
          className="text-xl mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          I started my coding journey with Competitive Programming as a member of my high school VOI team.
          Solving problems has always been intriguing to me, the process of dissecting complex problems,
          breaking them down into smaller, more manageable parts, and finally connecting them together has 
          always felt incredibly satisfying. That's why I enjoy diving into learning algorithms.
        </motion.p>

        <br />

        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          When I entered university, I began to explore web technologies, information systems and developed a strong interest in them.
          The ability to create useful, interactive websites, optimized applications captivated me.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
