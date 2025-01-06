import React, { useState } from "react";
import HorizontalLine from "./HorizontalLine";

const SkillsCards = ({ textColorClass, fontClass }) => {
  const [cards, setCards] = useState([
    { id: 1, color: "#FF6347", title: "Full-Stack" },
    { id: 2, color: "#32CD32", title: "React.js" },
    { id: 3, color: "#1E90FF", title: "Express" },
    { id: 4, color: "#FFD700", title: "Node.js" },
    { id: 5, color: "#8A2BE2", title: "MongoDB" },
    { id: 6, color: "#FF4500", title: "RESTful APIs" },
    { id: 7, color: "#00CED1", title: "Tailwind CSS" },
    { id: 8, color: "#FF1493", title: "MongoDB" },
    { id: 9, color: "#7FFF00", title: "API Testing" },
    { id: 10, color: "#FF69B4", title: "API Debugging" },
  ]);

  const handleCardClick = (index) => {
    const newCards = [...cards];
    const clickedCard = newCards.splice(index, 1)[0];
    newCards.push(clickedCard);
    setCards(newCards);
  };

  return (
    <div className={`container mx-auto text-current ${fontClass}`}>
      <div className=" gap-y-12 mx-auto flex flex-col lg:flex-row justify-between gap-80 items-start h-auto px-4 lg:px-0 py-8 mb-80 lg:mb-60 mt-10 lg:mt-40 max-w-5xl">
        <div className="flex flex-1 flex-col justify-center items-start w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2 className={`text-3xl font-bold awsomeTextColor mb-4`}>
            My Skills
          </h2>
          <p className={`text-lg ${textColorClass} blue-gray`}>
            A showcase of my technical skills and expertise in various
            technologies.
          </p>
        </div>

        <div className="relative flex-1 w-full lg:w-2/3 flex justify-center items-center">
          <div className="absolute w-full h-full flex justify-center items-center">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`absolute w-48 md:w-60 lg:w-60 h-40 ml-2 md:ml-0 lg:ml-0 rounded-xl shadow-2xl flex justify-center items-center ${textColorClass} font-semibold text-xl transform transition-all duration-300 ease-in-out
                ${index === 0 ? "z-10" : "z-0"} 
                ${index === 0 ? "scale-100" : "scale-90"} cursor-pointer`}
                style={{
                  backgroundColor: card.color,
                  left: `${index * 15}px`,
                  top: `${index * 10}px`,
                  transform: `rotate(${(index - 1) * 6}deg)`,
                }}
                onClick={() => handleCardClick(index)}
              >
                <span>{card.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <HorizontalLine />
      </div>
    </div>
  );
};

export default SkillsCards;
