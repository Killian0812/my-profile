import React from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImProfile } from "react-icons/im";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100007801574815",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Killian0812",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ngcuong0812@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          CV <ImProfile size={30} />
        </>
      ),
      href: "/my-profile/Nguyen Manh Cuong_CV.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
