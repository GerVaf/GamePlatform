import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin4Fill } from "../../node_modules/react-icons/ri";
import { removeFromCart } from "../data/productsSlice";

const Cart = () => {
  const CartItem = useSelector((state) => state?.product.cart);
  console.log(CartItem);
  const dispatch = useDispatch();

  return (
    <>
      {CartItem?.length < 1 ? (
        <div className="text-blue-400 h-[90vh] flex justify-center items-center font-bold sm:text-4xl px-10"> There's nothing.Let's buy the games to feel the new world!</div>
      ) : (
        <div className="flex p-5 flex-wrap justify-center gap-10 rounded-lg">
          {CartItem?.map((el) => {
            return (
              <div
                key={el.id}
                className=" rounded-t-md mainbg w-80 h-80 text-white"
              >
                <img
                  className=" w-80 h-48 object-cover"
                  src={el.background_image}
                  alt=""
                />
                <div className="py-2 px-5">
                  <p className="font-bold mb-5">{el.name}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">
                      {el.added < 7000 ? "Free" : el.metacritic + "$"}
                    </p>
                    <button
                      onClick={() => dispatch(removeFromCart(el))}
                      className="bg-gradient-to-r hover:shadow-rose-500/100 shadow-blue-500/50 shadow-lg hover:from-rose-500 hover:to-red-600 from-cyan-400 to-blue-500 text-white px-3 py-3 rounded-2xl text-xl"
                    >
                      <RiDeleteBin4Fill />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Cart;
