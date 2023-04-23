import React from "react";

const SlideMenu = () => {
  const bar = [
    "ACTION",
    "OPENWORLD",
    "INDIE",
    "FIGHTING",
    "SPORTS",
    "STRATEGY",
    "HORROR"
  ];
  return (
    <>
      <ul className="text-white flex flex-col font-bold gap-4 items-start cursor-pointer py-16 ">
        {bar.map(el=>{
          return(
            <li className=" w-[100%] hover:border-l-[white] border-l-2 hover:pl-2 border-transparent  hover:bg-[#094f6e] transition duration-300 px-5 py-2 ">{el}</li>
          )
        })}
      </ul>
    </>
  );
};

export default SlideMenu;
