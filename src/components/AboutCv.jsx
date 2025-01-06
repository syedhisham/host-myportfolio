import React from "react";
import { Button } from "@material-tailwind/react";
import { LiaArrowRightSolid } from "react-icons/lia";
import HorizontalLine from "./HorizontalLine";

const AboutCv = ({ textColorClass, fontClass, bgClass }) => {
  const handleCvNavigation = () => {
    // Navigate to CV or download it
    window.open("/cv/PortCV.pdf", "_blank");
  };

  return (
    <section className="mt-16">
      <div className="container mx-auto max-w-6xl text-center p-3 md:p-0 lg:p-0">
        {/* Heading */}
        <h2 className="text-4xl font-bold awsomeTextColor mb-6">
          Discover My Professional Journey
        </h2>

        {/* Description */}
        <p className="text-lg blue-gray mb-10">
          My CV encapsulates my journey as a Full Stack Developer, detailing my
          skills, projects, and accomplishments. From crafting efficient backend
          systems to designing engaging user interfaces, it highlights the
          expertise and dedication I bring to every project.
        </p>

        {/* Button */}
        <div className="flex w-64 justify-center container mx-auto mb-20 relative group">
          <Button
            onClick={handleCvNavigation}
            variant="outlined"
            className={`w-64 px-4 py-2 text-sm font-medium awsomeIndigoColor border-${textColorClass} rounded-lg group-hover:bg-white/20 relative flex items-center justify-center`}
            title="My CV"
          >
            <span className="ml-10 mr-2">View my CV</span>
            <LiaArrowRightSolid className="text-lg transition-transform duration-300 group-hover:translate-x-3" />
          </Button>
        </div>
      </div>
      <div className="container mx-auto">
        <HorizontalLine />
      </div>
    </section>
  );
};

export default AboutCv;
