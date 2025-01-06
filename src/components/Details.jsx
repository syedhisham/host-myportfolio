import React from "react";
import { Link, Element } from "react-scroll";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub, FaInstagram, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { motion } from "framer-motion";
import HorizontalLine from "./HorizontalLine";

const Details = ({ textColorClass, fontClass, bgClass }) => {
  const discordId = import.meta.env.VITE_DISCORD_ID;
  const name = "Syed Hisham";
  // Variants for letter animation
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Delay each letter by 0.05 seconds
        duration: 0.5,
      },
    }),
  };
  const flipAnimation = {
    rotateX: [0, 180, 360], // Rotates from 0 to 180 to 360 degrees along the X-axis
    transition: {
      repeat: Infinity,
      repeatDelay: 2.5, // Delay after each rotation
      duration: 1.5, // Duration of one full rotation cycle
      ease: "easeInOut",
    },
  };

  return (
    <div className={`w-full ${fontClass}`}>
      <div className="flex flex-col p-4 md:p-0 lg:flex-row mx-auto max-w-5xl gap-10 lg:gap-20 ">
        {/* Left Container */}
        <div
          className={`lg:w-1/2 w-full lg:sticky top-0 lg:h-screen ${textColorClass} flex flex-col justify-around overflow-x-hidden`}
        >
          <div>
            {/* Animating each letter in h1 */}
            <motion.h1
              className={`text-4xl lg:text-5xl font-extrabold ${textColorClass} mb-4`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterAnimation}
                  className="inline-block"
                  animate={letter === "i" ? flipAnimation : null} // Apply flip only to 'i'
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
            <p className={`text-lg mb-4 blue-gray`}>
              Full Stack Developer
            </p>
            <p className={`blue-gray mb-8`}>
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>

            <ul className="space-y-2">
              <li>
                <Link
                  to="aboutMe"
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer awsomeTextColor`}
                >
                  — About Me
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer awsomeTextColor`}
                >
                  — Education
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer awsomeTextColor`}
                >
                  — Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer awsomeTextColor`}
                >
                  — Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className={`flex space-x-5 mt-8`}>
            <a
              href="https://github.com/syedhisham"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColorClass} hover:text-gray-300`}
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColorClass} hover:text-gray-300`}
            >
              <AiOutlineTwitter size={28} />
            </a>
            <a
              href="https://www.instagram.com/syedhishamshah/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColorClass} hover:text-gray-300`}
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://wa.me/923038144158"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColorClass} hover:text-gray-300`}
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href={`https://discord.com/users/${discordId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColorClass} hover:text-gray-300`}
            >
              <FaDiscord size={28} />
            </a>
          </div>
        </div>

        {/* Right Container */}
        <div
          className={`lg:w-2/3 w-full text-md ${textColorClass} pt-10 lg:pt-32 overflow-x-hidden`}
        >
          <Element name="aboutMe" className="mb-12 relative z-10 blue-gray">
            <p className={`mb-4`}>
              I am a passionate Full Stack Developer with a strong foundation in
              both front-end and back-end technologies. I enjoy turning complex
              problems into simple, beautiful, and intuitive designs. I have a
              keen interest in web development and always strive to learn new
              technologies and improve my skills.
            </p>
            <p className="">
              In my spare time, I love to contribute to open-source projects and
              engage with the tech community. My goal is to create applications
              that are not only functional but also enhance user experience.
            </p>
          </Element>
          <Element name="experience" className="mb-12 relative z-1">
            <ul className="list-none space-y-3">
              <div
                className={`flex justify-center ${
                  bgClass === "white"
                    ? "hover:bg-gray-50"
                    : "hover:bg-white/10"
                } gap-2 transition-all duration-150 ease-in-out p-5 rounded-md blue-gray`}
              >
                <p className="w-1/3 text-sm awsomeIndigoColor">2015 — 2017</p>
                <li className="w-full pl-3 md:pl-10 lg:pl-10">
                  <strong className="awsomeTextColor">Secondary School Certificate (SSC)</strong>
                  <p>
                    Abbottabad Public School & College, Abbottabad, KPK, Pakistan
                  </p>
                 
                </li>
              </div>

              <div
                className={`flex justify-center ${
                  bgClass === "white"
                    ? "hover:bg-gray-50"
                    : "hover:bg-white/10"
                } gap-2 transition-all duration-150 ease-in-out p-5 rounded-md blue-gray`}
              >
                <p className="w-1/3 text-sm awsomeIndigoColor">2017 — 2019</p>
                <li className="w-full pl-3 md:pl-10 lg:pl-10">
                <strong className="awsomeTextColor">Higher Secondary Certificate (HSC)</strong>
                  <p>
                  Abbottabad Public School & College, Abbottabad, KPK, Pakistan
                  </p>
                 
                </li>
              </div>
              <div
                className={`flex justify-center ${
                  bgClass === "white"
                    ? "hover:bg-gray-50"
                    : "hover:bg-white/10"
                } gap-2 transition-all duration-150 ease-in-out p-5 rounded-md blue-gray`}
              >
                <p className="w-1/3 text-sm awsomeIndigoColor">2021 — PRESENT</p>
                <li className="w-full pl-3 md:pl-10 lg:pl-10">
                <strong className="awsomeTextColor">BS in Computer Science</strong>
                  <p>
                    COMSATS University Islamabad
                  </p>
                  
                </li>
              </div>
            </ul>
          </Element>
          <Element name="skills" className="mb-12">
            <ul
              className={`space-y-2 flex flex-col ${
                bgClass === "white" ? "hover:bg-gray-50" : "hover:bg-white/10"
              } rounded-md blue-gray p-0 md:p-3 lg:p-4`}
            >
              <li className="p-2">
                Proficient in HTML, CSS, Tailwind CSS, JavaScript, and React
              </li>
              <li className="p-2">
                Experienced with Node.js, Express, and MongoDB
              </li>
              <li className="p-2">Strong understanding of RESTful APIs</li>
              <li className="p-2">
                Familiar with version control systems like Git
              </li>
              <li className="p-2">
                Knowledgeable in Agile development methodologies
              </li>
              <div className="flex flex-wrap gap-2 mt-2">
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  HTML
                </p>
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  CSS
                </p>
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  Tailwind CSS
                </p>
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  Bootstrap
                </p>
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  JavaScript
                </p>
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  Material Tailwind CSS
                </p>
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  React
                </p>
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  MongoDB
                </p>
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  Node.js
                </p>
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  Express
                </p>
                <p
                  className={`${
                    bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                  } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                >
                  Git
                </p>
              </div>
            </ul>
          </Element>

          <Element name="projects" className="mb-12">
            <ul className="space-y-2">
              <li
                className={`flex items-start group cursor-pointer ${
                  bgClass === "white"
                    ? "hover:bg-gray-50"
                    : "hover:bg-white/10"
                } rounded-md p-10 transition-all duration-200 ease-in-out blue-gray`}
              >
                <img
                  src="https://res.cloudinary.com/dqlyxvgcc/image/upload/v1736008920/MyPortfolio/Images/nfgihppprwgkk23cg965.png"
                  alt="HandiCraft Store Img"
                  className="w-24 h-20 object-cover rounded-md mr-4 mt-1 group-hover:scale-105 transition-all duration-200 ease-in"
                />
                <div className={``}>
                  <div className={`flex flex-row items-start`}>
                    <p
                      className={`-mr-48 group-hover:${textColorClass} awsomeTextColor transition-all duration-200 ease-in-out `}
                    >
                      HandicraftStore
                    </p>
                    <GoArrowUpRight className="hidden md:block lg:block transition-transform duration-300 transform translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p>
                  HandicraftStore is a full-stack e-commerce platform connecting artisans and buyers, allowing sellers to manage shops, upload products, and track sales. Buyers can browse categories, view product details, and place orders seamlessly.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      React.js
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Node.js
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      MongoDB
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Tailwind CSS
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Nodemailer
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      JWT
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Cloudinary
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Stripe
                    </p>
                  </div>
                </div>
              </li>

              <li
                className={`flex blue-gray items-start group cursor-pointer ${
                  bgClass === "white"
                    ? "hover:bg-gray-50"
                    : "hover:bg-white/10"
                } rounded-md p-10 transition-all duration-200 ease-in-out`}
              >
                <img
                  src="https://res.cloudinary.com/dqlyxvgcc/image/upload/v1736008900/MyPortfolio/Images/c8zvybfkvkc4cb7dpdo3.jpg"
                  alt="Shoe Shop Store Image"
                  className="w-24 h-20 object-cover rounded-md mr-4 mt-1 group-hover:scale-105 transition-all duration-200 ease-in"
                />
                <div className={``}>
                  <div className={`flex flex-row items-start`}>
                    <p
                      className={`-mr-32 group-hover:${textColorClass} awsomeTextColor transition-all duration-200 ease-in-out`}
                    >
                      E-Commerce Shoe Store
                    </p>
                    <GoArrowUpRight className="hidden md:block lg:block transition-transform duration-300 transform translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p>
                  The Shoe Shop is a full-stack e-commerce app for footwear, allowing customers to browse, search, and purchase shoes, sandals, and slippers for men and women. It features a dynamic front-end, a robust back-end, and integrates with MongoDB for seamless product management.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      React.js
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Node.js
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      MongoDB
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Tailwind CSS
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      JWT
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Cloudinary
                    </p>
                  </div>
                </div>
              </li>
              <li
                className={`flex blue-gray items-start group cursor-pointer ${
                  bgClass === "white"
                    ? "hover:bg-gray-50"
                    : "hover:bg-white/10"
                } rounded-md p-10 transition-all duration-200 ease-in-out`}
              >
                <img
                  src="https://res.cloudinary.com/dqlyxvgcc/image/upload/v1736008975/MyPortfolio/Images/e0ttcjxvbmwvhfqpnfeo.jpg"
                  alt="Task FLow Image"
                  className="w-24 h-20 object-cover rounded-md mr-4 mt-1 group-hover:scale-105 transition-all duration-200 ease-in"
                />
                <div className={``}>
                  <div className={`flex flex-row items-start`}>
                    <p
                      className={`-mr-60 group-hover:${textColorClass} awsomeTextColor transition-all duration-200 ease-in-out`}
                    >
                      TaskFlow
                    </p>
                    <GoArrowUpRight className="hidden md:block lg:block transition-transform duration-300 transform translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p>
                  TaskFlow is a MERN stack Todo app that allows users to manage tasks by adding, updating, and deleting them. It offers a user-friendly interface to view and filter tasks by status, providing a seamless experience for efficient task management.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      React.js
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Node.js
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      MongoDB
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Express
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      CSS
                    </p>
                  </div>
                </div>
              </li>

              <li
                className={`flex items-start group cursor-pointer ${
                  bgClass === "white"
                    ? "hover:bg-gray-50"
                    : "hover:bg-white/10"
                } rounded-md p-10 transition-all duration-200 ease-in-out blue-gray`}
              >
                <img
                  src="https://res.cloudinary.com/dqlyxvgcc/image/upload/v1736008910/MyPortfolio/Images/rjrxrbe2srje1pxj6srx.png" 
                  alt="HandiCraft Store Img"
                  className="w-24 h-20 object-cover rounded-md mr-4 mt-1 group-hover:scale-105 transition-all duration-200 ease-in"
                />
                <div className={``}>
                  <div className={`flex flex-row items-start`}>
                    <p
                      className={`-mr-52 group-hover:${textColorClass} awsomeTextColor transition-all duration-200 ease-in-out `}
                    >
                      PoultryPal
                    </p>
                    <GoArrowUpRight className="hidden md:block lg:block transition-transform duration-300 transform translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p>
                  PoultryPal is a comprehensive web-based management system designed to streamline and centralize key operations of poultry farms. It integrates functionalities like Human Resource Management, Point of Sale, Inventory, and Flock Monitoring into a single, user-friendly platform.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      React.js
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Node.js
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      MongoDB
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Tailwind CSS
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Nodemailer
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      JWT
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Cloudinary
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Stripe
                    </p>
                    <p
                      className={`${
                        bgClass === "white" ? "bg-gray-200" : "bg-white/10"
                      } p-1 rounded-3xl pl-4 pr-4 text-sm awsomeTextColor`}
                    >
                      Redux
                    </p>
                  </div>
                </div>
              </li>

            </ul>
          </Element>
        </div>
      </div>
      <div className="container mx-auto">
        <HorizontalLine />
      </div>
    </div>
  );
};

export default Details;
