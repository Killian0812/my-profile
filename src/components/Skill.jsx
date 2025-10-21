import nodejs from '../assets/techs/nodejs.png'
import springboot from '../assets/techs/springboot.png'
import mysql from '../assets/techs/mysql.png'
import redis from '../assets/techs/redis.png'
import react from '../assets/techs/react.png'
import mongodb from '../assets/techs/mongodb.png'
import firebase from '../assets/techs/firebase.png'
import reactNative from '../assets/techs/reactnative.png'
import git from '../assets/techs/git.png'
import flutter from '../assets/techs/flutter.svg'
import gcp from '../assets/techs/gcp.png'
import tensorflow from '../assets/techs/tensorflow.png'
import { motion } from "framer-motion";

const Skill = () => {
  const techs = [
    {
      id: 5,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 13,
      src: flutter,
      title: "Flutter",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: mongodb,
      title: "MongoDB",
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
      id: 1,
      src: springboot,
      title: "Spring Boot",
      style: "shadow-green-500",
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
    {
      id: 10,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 14,
      src: gcp,
      title: "Google Cloud",
      style: "shadow-yellow-500",
    },
    {
      id: 15,
      src: tensorflow,
      title: "TensorFlow",
      style: "shadow-yellow-500",
    },
  ];

  return (
    <div
      name="skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skill
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.id}
              className={`pt-5 shadow-md hover:scale-105 duration-500 py-2 rounded-lg flex flex-col items-center justify-between h-40 ${tech.style}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={tech.src} alt="" className="w-20 mx-auto" />
              <p className="mb-1">{tech.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
