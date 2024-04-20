import React from "react";
import klock from "../assets/projects/klock.png";
import chatk from "../assets/projects/chatk.png";
import tqbedu from "../assets/projects/tqbedu.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: klock,
      title: 'KLock',
      content: 'A smart-lock managing app integrated with face-recognition device on every front door. You can see who enters the room along with the date and time. KLock mobile app allows you to open door for your guest remotely.',
      techstack: 'React, React-Native, Expo, NodeJS, Firebase'
    },
    {
      id: 2,
      src: chatk,
      title: 'ChatK',
      content: 'A realtime chat and video call app built for school project focus on enhancing user experience. This also provided me with valuable experience in implementing an effective team Git workflow.',
      techstack: 'React, GetStream API, NodeJS, MongoDB'
    },
    {
      id: 3,
      src: tqbedu,
      title: 'TQBEdu',
      content: 'A platform where teachers can quickly create exams, shuffle questions or generate questions from mathematical formulas. Students can take exams in class, view detailed results, and participate in training sessions using open exams.',
      techstack: 'Spring Boot, MySQL, Redis'
    }
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, content, techstack }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 w-full h-[150px] hover:scale-105"
              />
              <div className="flex items-center justify-center pt-2 font-bold">
                <p>{title}</p>
              </div>
              <hr></hr>
              <div className="items-center justify-center px-3 py-2 h-[100px] text-sm">
                <p>{content}</p>
              </div>
              <div className="mt-5 py-3 px-3 text-sm italic">
                <p>Techstack: {techstack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
