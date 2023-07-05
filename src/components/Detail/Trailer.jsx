import React from "react";
import Marquee from "react-fast-marquee";

const Trailer = ({ stores }) => {
  return (
    <Marquee
      className="flex sm:h-72  h-32"
      speed={70}
      pauseOnHover={true}
      gradientColor={false}
    >
      {stores?.map((sto) => {
        return (
          <div key={sto.id} className=" mx-5 flex  sm:gap-3 font-bold">
            <img
              className=" sm:h-56 h-32 object-cover rounded-md"
              src={sto.store.image_background}
              alt=""
            />
          </div>
        );
      })}
    </Marquee>
  );
};

export default Trailer;
