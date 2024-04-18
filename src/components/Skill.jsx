import React from "react";

import nodejs from '../assets/techs/nodejs.png'
import springboot from '../assets/techs/springboot.png'
import mysql from '../assets/techs/mysql.png'
import redis from '../assets/techs/redis.png'
import react from '../assets/techs/react.png'
import redux from '../assets/techs/redux.png'
import express from '../assets/techs/express.png';
import tailwind from '../assets/techs/tailwind.png'
import mongodb from '../assets/techs/mongodb.png'
import firebase from '../assets/techs/firebase.png'
import reactNative from '../assets/techs/reactnative.png'
import git from '../assets/techs/git.png'

const Skill = () => {
  const techs = [
    {
      id: 1,
      src: springboot,
      title: "Spring Boot",
      style: "shadow-green-500",
    },
    {
      id: 2,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: redis,
      title: "Redis",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: express,
      title: "Express.js",
      style: "shadow-gray-500",
    },
    {
      id: 7,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "TailwindCSS",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 10,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      src: reactNative,
      title: "React Native",
      style: "shadow-cyan-500",
    },
    {
      id: 12,
      src: git,
      title: "Git",
      style: "shadow-red-500",
    },
  ];

  return (
    <div
      name="skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skill
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
