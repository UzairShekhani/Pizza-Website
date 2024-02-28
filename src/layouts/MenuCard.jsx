import React from "react";
import Button from "../layouts/Button";

const MenuCard = ({ id, img, title, price }) => {
  return (
    <div
      className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg bg-slate-50 hover:scale-95 transition duration-300 ease-in-out cursor-pointer"
      key={id}
    >
      <img className=" rounded-t-lg" src={img} alt="img" />
      <div className=" space-y-4">
        <h3 className=" font-bold text-center text-2xl pt-3">{title}</h3>
        <p className=" text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className=" flex flex-row items-center justify-center gap-4 pb-2">
          <h3 className=" font-semibold text-xl text-center text-red-500">
            ${price}
          </h3>
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
