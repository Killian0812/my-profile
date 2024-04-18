import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">You can contact me using information below:</p>
          <p className="py-1">Facebook: <a href="https://www.facebook.com/profile.php?id=100007801574815"
            target="_blank" rel="noreferrer" className="underline text-blue-500">Nguyễn Cường</a></p>
          <p className="py-1">Email: ngcuong0812@gmail.com</p>
          <p className="py-1">Phone: (+84) 888 264 006</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
