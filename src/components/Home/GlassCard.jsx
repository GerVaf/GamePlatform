import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./GlassCard.css";

import CarouselCard from "./CarouselCard";

const GlassCard = () => {
  const CardData = useSelector((state) =>
    state?.product?.item?.filter((el) => el.added < 14100)
  );

// console.log(CardData)
  return (
    <>

      <div className=" marqe flex flex-col gap-5">
        {CardData?.map((card) => {
          return <CarouselCard key={card.id} {...card} />;
        })}
      </div>
    </>
  );
};

export default GlassCard;
