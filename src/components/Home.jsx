import React, { useState } from "react";
import ProfileImage from "../assets/profile.png";
import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";

const Home = () => {
  const [flipped, setFlipped] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setFlipped((prev) => !prev);
  }

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full md:w-[70%]"
        >
          <h2 className="nameFlip text-4xl sm:text-7xl text-white">
            <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
              <p onMouseEnter={handleClick}>
                Hi, I'm <span className="font-signature">Killian</span>
              </p>

              <p onMouseLeave={handleClick}>
                Hi, I'm <span className="font-signature">Cường</span>
              </p>
            </ReactCardFlip>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 py-4 max-w-md"
          >
            I was born in December 2003. Majoring in Computer Engineering at
            Hanoi University of Science and Technology (HUST) with a passion for
            software development.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img
            src={ProfileImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full shadow-lg shadow-gray-800"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
