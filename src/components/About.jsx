import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I started my coding journey with Competitive Programming as a member of my high school VOI team.
          Solving problems has always been intriguing to me, the process of dissecting complex problems,
          breaking them down into smaller, more manageable parts, and finally connecting them together has 
          always felt incredibly satisfying. That's why I enjoy diving into learning algorithms.
        </p>

        <br />

        <p className="text-xl">
          When I entered university, I began to explore web technologies, information systems and developed a strong interest in them.
          The ability to create useful, interactive websites, optimized applications captivated me.
        </p>
      </div>
    </div>
  );
};

export default About;
