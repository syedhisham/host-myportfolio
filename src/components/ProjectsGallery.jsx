import React from 'react';
import { Button } from "@material-tailwind/react";
import { LiaArrowRightSolid } from "react-icons/lia";
import HorizontalLine from './HorizontalLine';
import MyProjectsHeading from './MyProjectsHeading';

const VideoGallery = ({ textColorClass, fontClass }) => {
  const videos = [
    {
      title: 'HandicraftStore',
      description: `
        HandicraftStore is a full-stack e-commerce platform designed to connect artisans and buyers, 
        focusing on promoting and selling handcrafted products. The platform provides an intuitive and 
        responsive experience for both sellers and buyers, enabling sellers to manage their shops, upload 
        products, and monitor sales, while buyers can browse categories, view product details, and place 
        orders seamlessly.
      `,
      githubLink: 'https://github.com/syedhisham/HandicraftStore',
      videoSrc: "https://res.cloudinary.com/dqlyxvgcc/video/upload/v1736008335/MyPortfolio/sit3uumcvg54yo7gxevn.mp4",
    },
    {
      title: 'E-Commerce Shoe Store',
      description: `
        The Shoe Shop is a full-stack e-commerce web application for a shoe store. The project provides 
        a platform for customers to browse, search, and purchase various types of footwear, including shoes, 
        sandals, and slippers for both men and women. It features a dynamic front-end, a robust back-end, and 
        integrates with a MongoDB database for seamless product management.
      `,
      githubLink: 'https://github.com/syedhisham/The-Shoe-Shop',
      videoSrc: "https://res.cloudinary.com/dqlyxvgcc/video/upload/v1736008095/MyPortfolio/oxjyilua6puerp0xoe98.mp4",
    },
    {
      title: 'TaskFlow',
      description: `
        TaskFlow is a MERN Stack project, specifically a Todo application that enables users to efficiently 
        manage their tasks. Users can add new tasks by entering a title and description, delete tasks with a 
        single click, and update existing tasks to modify details or mark them as completed. The application 
        offers a user-friendly interface for viewing all tasks, with options to filter them by status, such as 
        completed or pending. Overall, TaskFlow provides a seamless and intuitive experience for effective task 
        management.
      `,
      githubLink: 'https://github.com/syedhisham/TaskFlow',
      videoSrc: "https://res.cloudinary.com/dqlyxvgcc/video/upload/v1736008009/MyPortfolio/iezyxbd9qgjdymj5n1qd.mp4",
    },
    {
      title: 'PoultryPal',
      description: `
        PoultryPal is a web-based poultry farm management system designed to centralize and streamline operations such as Human Resource Management, Point of Sale, Flock Monitoring, and Inventory Management. Built with MongoDB, Node.js, and React.js, it offers real-time insights, improves productivity, and enhances decision-making for modern poultry farms.
      `,
      githubLink: 'https://github.com/syedhisham/PoultryPal',
      videoSrc: "https://res.cloudinary.com/dqlyxvgcc/video/upload/v1736008232/MyPortfolio/oshzoubia52yybjw87ie.mp4",
    },
  ];

  return (
    <div className={`py-10 ${fontClass}`}>
      <div className="container mx-auto px-4 lg:px-0 mt-20 mb-20 max-w-5xl">
        {/* Heading Section */}
        <MyProjectsHeading textColorClass={textColorClass} />
        <div className="space-y-20">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0 md:space-x-8 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Video Container */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full md:w-1/2">
                <video
                  className="w-full h-auto"
                  controls
                  loop
                  muted
                  src={video.videoSrc}
                />
              </div>

              {/* Description */}
              <div className="awsomeIndigoColor space-y-4 w-full md:w-1/3">
                <h2 className="text-xl font-bold">{video.title}</h2>
                <p className="blue-gray">{video.description}</p>
                <a
                  href={video.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-start gap-2 transition-transform transform hover:scale-100"
                >
                  <Button
                    variant="outlined"
                    className={`w-64 px-4 py-2 text-sm font-medium awsomeIndigoColor border-${textColorClass} rounded-lg hover:bg-white/20`}
                    title="Git repository link"
                  >
                    View on GitHub
                  </Button>
                  <LiaArrowRightSolid className="absolute left-52 awsomeIndigoColor text-lg transition-transform duration-300 group-hover:translate-x-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        <HorizontalLine />
      </div>
    </div>
  );
};

export default VideoGallery;
