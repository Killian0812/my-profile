import React from "react";
import klock from "../assets/projects/klock.png";
import chatk from "../assets/projects/chatk.png";
import tendataCrawler from "../assets/projects/tendata-crawler.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: klock,
      title: 'KLock',
      content: 'A smart-lock managing app integrated with face-recognition device on every front door. You can see who enters the room along with the date and time. KLock mobile app allows you to open door for your guest remotely.'
    },
    {
      id: 2,
      src: chatk,
      title: 'ChatK',
      content: 'A realtime chat app built for school project focus on enhancing user experience. This also provided me with valuable experience in implementing an effective team Git workflow.'
    },
    {
      id: 3,
      src: tendataCrawler,
      title: 'TendataCrawler',
      content: 'A tool built for a friend of mine. Extracting data from the page html and export to .xls file. With this tool you can save extra downloading fee at tendata.com.'
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
          {projects.map(({ id, src, title, content }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center pt-2">
                <p>{title}</p>
              </div>
              <div className="flex items-center justify-center px-3 py-2 text-sm">
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
