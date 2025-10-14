import React, { useState } from "react";
import ProfileImage from "../assets/profile.png";
import ReactCardFlip from 'react-card-flip';

const Home = () => {

  const [flipped, setFlipped] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setFlipped(prev => !prev);
  }

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-[70%]">
          <h2 className="nameFlip text-4xl sm:text-7xl text-white">
            <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
              <p onMouseEnter={handleClick}>
                Hi, I'm <span className="font-signature">
                  Killian
                </span>
              </p>

              <p onMouseLeave={handleClick}>
                Hi, I'm <span className="font-signature">
                  Cường
                </span>
              </p>
            </ReactCardFlip>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I was born in December 2003. Majoring in Computer Engineering at Hanoi
            University of Science and Technology (HUST) with a passion for software development.
          </p>
        </div>

        <div>
          <img
            src={ProfileImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full"
          />
        </div>
      </div>
    </div >
  );
};

export default Home;
