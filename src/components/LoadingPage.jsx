import React from "react";
import ReactLoading from "react-loading";

const LoadingPage = ({textColorClass, fontClass, bgClass}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full ${bgClass}  ${fontClass} flex items-center justify-center z-50
    ${bgClass} === 'white' ? bg-gray-200 : '${bgClass}'
    `}>
      <div className="text-center space-y-6">
        {/* Loading Animation */}
        <div className="flex justify-center">
          <ReactLoading
            type="spinningBubbles"
            color={textColorClass}
            height={"20%"}
            width={"20%"}
          />
        </div>

        {/* Loading Text */}
        <h1 className={`text-2xl md:text-4xl font-bold ${textColorClass} animate-pulse`}>
          Please Wait...
        </h1>
        <p className={`${textColorClass} text-sm md:text-base opacity-80`}>
          We are setting things up for you!
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
