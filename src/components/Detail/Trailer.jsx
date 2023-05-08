import React from "react";
import Marquee from "react-fast-marquee";

const Trailer = ({ stores }) => {
  return (
      <Marquee className="flex h-72 " speed={70} pauseOnHover={true} gradientColor={false}>
        {stores?.map((sto) => {
          return (
            <div key={sto.id} className=" mx-5 flex  gap-3 font-bold">
            <img
              className=" h-56 object-cover rounded-md"
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
