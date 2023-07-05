import React, { useState } from "react";
import { useSelector } from "react-redux";

const SlideMenu = ({ setSearchTerm }) => {
  const bar = [
    { title: "ALL", id: null, type: "all" },
    { title: "ACTION", id: 4, type: "action" },
    { title: "RPG", id: 5, type: "role-playing-games-rpg" },
    { title: "INDIE", id: 51, type: "indie" },
    { title: "SPORT", id: 15, type: "sport" },
    { title: "SIMULATION", id: 14, type: "simulation" },
    { title: "ADVENTURE", id: 3, type: "adventure" },
    { title: "PUZZLE", id: 7, type: "puzzle" },
  ];
  const all = useSelector((state) => state.product.item);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    const selectedType = bar[index].id === null ? null : Number(bar[index].id);
    setSearchTerm(selectedType);
  };
  return (
    <>
      <ul className="text-white cursor-pointer flex flex-wrap justify-center text-sm gap-5 py-5 sm:flex sm:flex-col font-bold sm:gap-4 sm:items-start  sm:py-16">
        {bar.map((el, index) => {
          const isActive = index === activeIndex;
          return (
            <li
              key={el.title}
              onClick={() => handleClick(index)}
              className={`${
                isActive ? "activate" : ""
              } hover:border-l-[white] w-[150px] border-l-2 border-transparent hover:bg-[#404547] transition duration-300 px-3 py-2`}
            >
              {el.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SlideMenu;
