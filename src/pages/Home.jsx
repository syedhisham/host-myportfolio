import React, { useEffect, useState, Suspense, lazy, startTransition } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaFonticonsFi } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";
import AboutCv from "../components/AboutCv";

// Lazy load components
const SvgSpinnerAnimation = lazy(() => import("../components/SvgSpinnerAnimation"));
const Header = lazy(() => import("../components/Header"));
const Details = lazy(() => import("../components/Details"));
const SkillsCards = lazy(() => import("../components/SkillsCards"));
const ProjectsGallery = lazy(() => import("../components/ProjectsGallery"));
const ProjectsShowcase = lazy(() => import("../components/ProjectsShowcase"));
const LoadingPage = lazy(() => import("../components/LoadingPage"));

const Home = () => {
  const fontOptions = [
    "mulish",
    "mulish2",
    "sans",
    "playfair-display",
  ];

  const [fontClass, setFontClass] = useState(
    localStorage.getItem("fontClass") || fontOptions[0]
  );
  const [bgClass, setBgClass] = useState(
    localStorage.getItem("bgClass") || "customBackgroundNewColor"
  );
  const [textColorClass, setTextColorClass] = useState(
    localStorage.getItem("textColorClass") || "text-white"
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(
    localStorage.getItem("isLoading") === "false" ? false : true
  );

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("isLoading", "false"); // Store the loading state in localStorage
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleFontClass = () => {
    startTransition(() => {
      const currentIndex = fontOptions.indexOf(fontClass);
      const nextIndex = (currentIndex + 1) % fontOptions.length;
      const newFontClass = fontOptions[nextIndex];
      setFontClass(newFontClass);
      localStorage.setItem("fontClass", newFontClass);
    });
  };

  const toggleBgClass = () => {
    startTransition(() => {
      const newBgClass = bgClass === "customBackgroundNewColor" ? "white" : "customBackgroundNewColor";
      const newTextColorClass = newBgClass === "white" ? "text-black" : "text-white";
      setBgClass(newBgClass);
      setTextColorClass(newTextColorClass);
      localStorage.setItem("bgClass", newBgClass);
      localStorage.setItem("textColorClass", newTextColorClass);
    });
  };

  if (isLoading) {
    return <LoadingPage textColorClass={textColorClass} fontClass={fontClass} bgClass={bgClass} />;
  }
  console.log(localStorage.getItem("fontClass"));
console.log(localStorage.getItem("bgClass"));
console.log(localStorage.getItem("textColorClass"));


  return (
    <div className="scroll-smooth">
      <div className="">
        <Header textColorClass={textColorClass} fontClass={fontClass} bgClass={bgClass} />
      </div>
      <div
        className={`texture-container absolute ${bgClass === "white" ? "hidden" : ""} hidden md:block lg:block`}
        style={{ left: `${mousePosition.x - 200}px`, top: `${mousePosition.y - 200}px` }}
      >
        <div className={`${bgClass === "white" ? "hidden" : ""} texture-layer layer-1`} />
        <div className={`${bgClass === "white" ? "hidden" : ""} texture-layer layer-2`} />
        <div className={`${bgClass === "white" ? "hidden" : ""} texture-layer layer-3`} />
      </div>

      <div className={`${bgClass} ${fontClass} w-full`}>
        <div className="relative flex gap-x-3 items-center md:items-end">
          <button
            onClick={toggleFontClass}
            className={`mt-2 md:mt-0 md:absolute md:top-4 md:right-16 ${bgClass} ${textColorClass} px-4 py-2 rounded-lg shadow-lg`}
            title="Toggle Font Style"
          >
            <FaFonticonsFi className="w-6 h-6" />
          </button>

          <button
            onClick={toggleBgClass}
            className={`mt-2 md:mt-0 md:absolute md:top-4 md:right-32 ${bgClass} ${textColorClass} px-4 py-2 rounded-lg shadow-lg`}
            title="Toggle Background Color"
          >
            {bgClass === "customBackgroundNewColor" ? (
              <MdOutlineWbSunny className="w-6 h-6" />
            ) : (
              <BsMoonStars className="w-6 h-6" />
            )}
          </button>
        </div>

        <Suspense fallback={<LoadingPage />}>
          <div className="mt-8">
            <SvgSpinnerAnimation />
          </div>

          <div className="mt-8">
            <Details textColorClass={textColorClass} fontClass={fontClass} bgClass={bgClass} />
          </div>

          <div className="mt-8 overflow-x-hidden">
            <SkillsCards textColorClass={textColorClass} fontClass={fontClass} bgClass={bgClass} />
          </div>

          <div className="mt-8 overflow-x-hidden">
            <ProjectsGallery textColorClass={textColorClass} fontClass={fontClass} bgClass={bgClass} />
          </div>

          <div className="mt-8">
            <ProjectsShowcase />
          </div>
          <div className="">
            <AboutCv textColorClass={textColorClass} fontClass={fontClass} bgClass={bgClass} />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
