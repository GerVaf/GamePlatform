import React from "react";
import { useSelector } from "react-redux";

const SlideMenu = ({setSearchTerm }) => {
  const bar = [
    { title: "ALL", id: null, type: "all" },
    { title: "ACTION", id: 4, type: "action" },
    { title: "RPG", id: 5, type: "role-playing-games-rpg" },
    { title: "INDIE", id: 51, type: "indie" },
    { title: "SPORT", id: 15, type: "sport" },
    { title: "SIMULATION", id: 14, type: "simulation" },
    { title: "ADVENTURE", id: 3, type: "adventure" },
    { title: "PUZZEL", id: 7, type: "puzzle" },
  ];
  const all = useSelector((state) => state.product.item);
  return (
    <>
      <ul className="text-white flex flex-col font-bold gap-4 items-start cursor-pointer py-16 ">
        {bar.map((el) => {
          return (
            <li
              key={el.title}
              onClick={() =>
                el.id === null
                  ? setSearchTerm(null)
                  : setSearchTerm(Number(el.id))
              }
              className=" w-[100%] hover:border-l-[white] border-l-2 border-transparent  hover:bg-[#094f6e] transition duration-300 px-3 py-2 "
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
