import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import HorizontalLine from "./HorizontalLine";

const ProjectsShowcase = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold awsomeTextColor">
            Highlighting My Projects
          </h2>
          <p className="leading-relaxed blue-gray">
            Explore my portfolio of projects showcasing diverse skills and
            creativity. Each project represents my dedication to delivering
            high-quality work, innovative solutions, and impactful designs.
          </p>
          <div className="relative w-full">
            <p className="awsomeIndigoColor text-xl">More of my projects</p>
            <LiaArrowRightSolid className="absolute left-48 top-2 awsomeIndigoColor text-lg transition-transform duration-300 bg-white/20 rounded-full" />
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 ">
          <video
            className="mx-auto h-[900px] w-[500px] object-cover rounded-3xl"
            // controls
            autoPlay
            loop
            muted
            src="https://res.cloudinary.com/dqlyxvgcc/video/upload/v1736008511/MyPortfolio/jlctsnacdoujeomy3pmi.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="mt-16">
        <HorizontalLine />
      </div>
    </div>
  );
};

export default ProjectsShowcase;
