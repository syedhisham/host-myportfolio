import React, { useEffect, useState } from "react";
import AboutCv from "../components/AboutCv";
import SvgSpinnerAnimation from "../components/SvgSpinnerAnimation";
import Header from "../components/Header";
import Details from "../components/Details";
import SkillsCards from "../components/SkillsCards";
import ProjectsGallery from "../components/ProjectsGallery";
import ProjectsShowcase from "../components/ProjectsShowcase";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const bgClass = "customBackgroundNewColor"; // Set background color to customBackgroundNewColor
  const textColorClass = "text-white"; // Keep text color white

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="scroll-smooth mulish customBackgroundNewColor">
      <div className="">
        <Header />
      </div>
      <div
        className={`texture-container absolute ${bgClass === "white" ? "hidden" : ""} hidden md:block lg:block`}
        style={{ left: `${mousePosition.x - 200}px`, top: `${mousePosition.y - 200}px` }}
      >
        <div className={`${bgClass === "white" ? "hidden" : ""} texture-layer layer-1`} />
        <div className={`${bgClass === "white" ? "hidden" : ""} texture-layer layer-2`} />
        <div className={`${bgClass === "white" ? "hidden" : ""} texture-layer layer-3`} />
      </div>

      <div className={`${bgClass} ${textColorClass} w-full`}>
        <div className="mt-8">
          <SvgSpinnerAnimation />
        </div>

        <div className="mt-8">
          <Details />
        </div>

        <div className="mt-8 overflow-x-hidden">
          <SkillsCards />
        </div>

        <div className="mt-8 overflow-x-hidden">
          <ProjectsGallery />
        </div>

        <div className="mt-8">
          <ProjectsShowcase />
        </div>
        <div className="mt-1">
          <AboutCv />
        </div>
      </div>
    </div>
  );
};

export default Home;
