import tastetube from "../assets/projects/tastetube.png";
import klock from "../assets/projects/klock.png";
import chatk from "../assets/projects/chatk.png";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: tastetube,
      title: "TasteTube",
      content:
        "A cross-platform social video-sharing and e-commerce platform for the F&B community. TasteTube lets users explore food content, while restaurants can showcase dishes, manage orders, and engage with customers.",
      techstack:
        "Flutter, Google Transcoder API, Google Maps API, NodeJS, Firebase",
    },
    {
      id: 2,
      src: klock,
      title: "KLock",
      content:
        "A smart-lock managing app integrated with face-recognition device on every front door. You can see who enters the room along with the date and time. KLock mobile app allows you to open door for your guest remotely.",
      techstack: "React, React-Native, Expo, NodeJS, Firebase",
    },
    {
      id: 3,
      src: chatk,
      title: "ChatK",
      content:
        "A real-time chat and video call application designed to enhance user experience. Users can participate in group calls, FaceTime, and other interactive features for seamless communication.",
      techstack: "React, GetStream API, NodeJS, MongoDB",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
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
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project, index) => {
            const { id, src, title, content, techstack } = project;
            return (
              <motion.div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 w-full h-[150px]"
                />
                <div className="flex items-center justify-center pt-2 font-bold">
                  <p>{title}</p>
                </div>
                <hr className="w-full"></hr>
                <div className="px-3 py-2 text-sm">
                  <p>{content}</p>
                </div>
                <div className="py-3 px-3 text-sm italic border-t border-gray-600 mt-auto">
                  <p>Techstack: {techstack}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
