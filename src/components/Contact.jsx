import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <motion.div
          className="pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">You can contact me using information below:</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="py-1">Facebook: <a href="https://www.facebook.com/profile.php?id=100007801574815"
            target="_blank" rel="noreferrer" className="underline text-blue-500">Nguyễn Cường</a></p>
          <p className="py-1">Linkedin: <a href="https://www.linkedin.com/in/cuong-nguyen-881209259"
            target="_blank" rel="noreferrer" className="underline text-blue-500">Cuong Nguyen</a></p>
          <p className="py-1">Email: ngcuong0812@gmail.com</p>
          <p className="py-1">Phone: (+84) 888 264 006</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
